// src/components/contact/ContactForm.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send, MessageSquare } from "lucide-react";
import { profile } from "../../data/content";
import { getWhatsAppUrl } from "../../lib/whatsapp";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  contact: z.string().min(5, "Kontak (email / nomor WhatsApp) harus valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
  honeypot: z.string().max(0, "Bot detected"), // anti-spam
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      // Simulate form submission / webhook payload
      await new Promise((res) => setTimeout(res, 800));

      toast.success("Pesan terkirim!", {
        description: `Terima kasih ${data.name}, pesanmu sudah kuterima dan akan segera kubalas.`,
      });
      reset();
    } catch {
      toast.error("Gagal mengirim pesan", {
        description: "Silakan gunakan tombol WhatsApp langsung di bawah.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDirectWhatsApp = () => {
    const text = `Halo Dzaki! Saya tertarik berdiskusi mengenai proyek web development denganmu.`;
    window.open(getWhatsAppUrl(profile.whatsapp, text), "_blank");
  };

  return (
    <div className="relative paper-shadow">
      {/* Yellow sticky note with folded corner */}
      <div className="bg-[#fff9db] border-2 border-[#e6a800] p-6 sm:p-8 rounded-xl shadow-[6px_6px_0_#0f2a7a] relative">
        {/* Sticky tape on top */}
        <div
          aria-hidden="true"
          className="absolute -top-3 left-1/2 -translate-x-1/2 h-5 w-24 bg-yellow/80 border-t border-b border-white/60 -rotate-1 shadow-sm"
        />

        <div className="mb-6">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-navy/70">
            KIRIM PESAN LANGSUNG
          </span>
          <h3 className="font-pixel text-4xl text-pixel mt-1">LET'S CONNECT</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot field (hidden from humans) */}
          <input
            type="text"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />

          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1"
            >
              NAMA KAMU *
            </label>
            <input
              id="name"
              type="text"
              placeholder="Misal: Budi Santoso"
              {...register("name")}
              className="w-full rounded-lg border-2 border-navy/40 bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none"
            />
            {errors.name && (
              <p
                role="alert"
                aria-live="polite"
                className="mt-1 font-mono text-[11px] font-bold text-red-600"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1"
            >
              EMAIL / WHATSAPP *
            </label>
            <input
              id="contact"
              type="text"
              placeholder="nama@email.com atau 0812xxxx"
              {...register("contact")}
              className="w-full rounded-lg border-2 border-navy/40 bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none"
            />
            {errors.contact && (
              <p
                role="alert"
                aria-live="polite"
                className="mt-1 font-mono text-[11px] font-bold text-red-600"
              >
                {errors.contact.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1"
            >
              PESAN ATAU PERTANYAAN *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Ceritakan ide websitemu, kebutuhan fitur, atau peluang kerja..."
              {...register("message")}
              className="w-full rounded-lg border-2 border-navy/40 bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none"
            />
            {errors.message && (
              <p
                role="alert"
                aria-live="polite"
                className="mt-1 font-mono text-[11px] font-bold text-red-600"
              >
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy bg-navy px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_#ffc83d] transition-all hover:-translate-y-0.5 hover:bg-navy/90 active:translate-y-0 disabled:opacity-60"
            >
              <Send size={15} />
              {submitting ? "MENGIRIM..." : "KIRIM PESAN"}
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy bg-[#25D366] px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_#0f2a7a] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare size={15} />
              VIA WHATSAPP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
