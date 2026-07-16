export function getBrevoErrorMessage(status, data) {
  const message = typeof data?.message === "string" ? data.message : "";
  const normalizedMessage = message.toLowerCase();

  if (
    normalizedMessage.includes("unrecognised ip address") ||
    normalizedMessage.includes("unrecognized ip address") ||
    normalizedMessage.includes("authorised ip") ||
    normalizedMessage.includes("authorized ip")
  ) {
    return "Brevo blocked the request because this server IP is not authorized. Please add the current server IP to your Brevo authorized IPs in the Brevo dashboard, then try again.";
  }

  if (
    normalizedMessage.includes("invalid api key") ||
    normalizedMessage.includes("api key")
  ) {
    return "The email service is not configured correctly. Please contact the site owner.";
  }

  if (status >= 500) {
    return "The email service is temporarily unavailable. Please try again shortly.";
  }

  return message || "Failed to save contact";
}
