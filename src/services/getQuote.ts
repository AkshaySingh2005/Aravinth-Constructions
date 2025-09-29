export const openWhatsApp = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
  const defaultMessage =
    "Hello! I'm interested in getting a quote for construction services. Could you please provide me with more information?";

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp in a new tab/window
  window.open(whatsappUrl, "_blank");
};
