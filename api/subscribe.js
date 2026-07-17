import { getBrevoErrorMessage } from "./utils/brevo.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, firstName, lastName } = req.body;

  if (!email || !firstName || !lastName) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!process.env.BREVO_API_KEY) {
    console.error("BREVO_API_KEY environment variable is not set");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: firstName, LASTNAME: lastName },
        listIds: [Number(process.env.BREVO_LIST_ID) || 2],
        updateEnabled: true,
      }),
    });

    if (!response.ok && response.status !== 204) {
      const data = await response.json().catch(() => ({}));

      console.error("Brevo API error:", response.status, data);

      // TEMPORARY - show the real Brevo error
      console.log(JSON.stringify(data, null, 2));
      return res.status(response.status).json(data);
    }

    // return res.status(200).json({ success: true });
  } catch (err) {
    console.error("subscribe handler error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
