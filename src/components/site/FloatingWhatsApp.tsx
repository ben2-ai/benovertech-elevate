import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BENOVERTECH on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp blur-xl opacity-30 transition-opacity duration-300 group-hover:opacity-60" />
      <span className="relative flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-lift transition-all duration-300 hover:scale-105 hover:shadow-glow-teal active:scale-95">
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </span>
    </a>
  );
}
