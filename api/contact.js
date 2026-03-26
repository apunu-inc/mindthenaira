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

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Mind The Naira Contact Form",
          email: "mindthenaira@gmail.com",
        },
        to: [{ email: "mindthenaira@gmail.com", name: "Mind The Naira" }],
        replyTo: { email, name: `${firstName} ${lastName}` },
        subject: `New contact form message from ${firstName} ${lastName}`,
        textContent: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      console.error("Brevo API error:", response.status, data);
      return res
        .status(response.status)
        .json({ message: data.message || "Failed to send message" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("contact handler error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
