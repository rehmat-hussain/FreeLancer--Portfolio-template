
export const handleContactScroll = () => {
  const element = document.getElementById('contact');
  element?.scrollIntoView({ behavior: 'smooth' });
};

export const handleEmailClick = () => {
  window.location.href = "mailto:your.email@example.com";
};

export const handleWhatsAppClick = () => {
  window.open("https://wa.me/+1234567890", "_blank");
};
