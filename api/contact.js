import { getBrevoErrorMessage } from "./utils/brevo.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!process.env.BREVO_API_KEY) {
    console.error("BREVO_API_KEY environment variable is not set");
    return res.status(500).json({ message: "Server configuration error" });
  }

  const headers = {
    "Content-Type": "application/json",
    "api-key": process.env.BREVO_API_KEY,
  };

  try {
    // 1. Save contact to Brevo contacts list
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
          SMS: phone || "",
        },
        listIds: [Number(process.env.BREVO_LIST_ID) || 2],
        updateEnabled: true,
      }),
    });

    if (!contactRes.ok && contactRes.status !== 204) {
      const data = await contactRes.json().catch(() => ({}));
      console.error("Brevo contacts error:", contactRes.status, data);
      return res
        .status(contactRes.status)
        .json({ message: getBrevoErrorMessage(contactRes.status, data) });
    }

    // 2. Look up the contact by email to get the ID (works for both new and existing contacts)
    const lookupRes = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      { headers },
    );
    const contactData = await lookupRes.json().catch(() => ({}));
    const contactId = contactData.id || null;

    // 3. Attach the message as a note on the contact
    if (contactId) {
      await fetch("https://api.brevo.com/v3/notes", {
        method: "POST",
        headers,
        body: JSON.stringify({
          text: `Message from contact form:\n\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
          contactIds: [contactId],
        }),
      }).catch((err) => console.error("Brevo note error:", err));
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("contact handler error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
