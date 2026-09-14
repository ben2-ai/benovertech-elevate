export const site = {
  name: "BENOVERTECH",
  tagline: "Creative • Print • Technology",
  message: "We Design. We print. We connect you with the right technology.",
  address: "No. 14 Benson Ojukwu Street, Ago Palace, Lagos State",
  hours: "Open Monday to Saturday, 8 AM to 6 PM",
  email: "benovertech@gmail.com",
  phones: ["08107271610", "09120253807"],
  whatsappNumber: "2348107271610",
  defaultEnquiry: "Hello BENOVERTECH, I would like to make an enquiry.",
};

export function waLink(message: string = site.defaultEnquiry) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string) {
  return `tel:+234${phone.replace(/^0/, "")}`;
}
