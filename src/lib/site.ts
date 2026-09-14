export const site = {
  name: "BENOVERTECH",
  tagline: "Design • Print • Tech",
  message: "We design, print, and help people get the right gadgets for everyday life.",
  address: "Lagos, Nigeria",
  hours: "Open Monday to Saturday, 8am to 6pm",
  email: "benovertech@gmail.com",
  phones: ["08107271610", "09120253807"],
  whatsappNumber: "2348107271610",
  defaultEnquiry: "Hello BENOVERTECH, I want to make an enquiry.",
};

export function waLink(message: string = site.defaultEnquiry) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string) {
  return `tel:+234${phone.replace(/^0/, "")}`;
}
