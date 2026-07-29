import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/6281380140997"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <span className="relative grid place-items-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition">
        <MessageCircle className="w-7 h-7" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-navy text-white text-xs font-semibold px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Chat via WhatsApp
      </span>
    </a>
  );
}
