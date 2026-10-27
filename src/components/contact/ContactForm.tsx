// src/components/contact/ContactForm.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send, MessageSquare } from "lucide-react";
import { Tape } from "../sx/Primitives";
import { profile } from "../../data/content";
import { getWhatsAppUrl } from "../../lib/whatsapp";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  contact: z.string().min(5, "Kontak (email / nomor WhatsApp) harus valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
  honeypot: z.string().max(0, "Bot detected"),
});
type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", contact: "", message: "", honeypot: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      // [ISI] Ganti dengan layanan form (Formspree / Web3Forms / Resend) sebelum produksi.
      await new Promise((res) => setTimeout(res, 800));
      toast.success("Pesan terkirim!", { description: `Terima kasih ${data.name}, pesanmu sudah kuterima dan akan segera kubalas.` });
      reset();
    } catch {
      toast.error("Gagal mengirim pesan", { description: "Silakan gunakan tombol WhatsApp langsung." });
    } finally {
      setSubmitting(false);
    }
  };

  const openWhatsApp = () =>
    window.open(getWhatsAppUrl(profile.whatsapp, "Halo Dzaki! Saya tertarik berdiskusi mengenai proyek web development denganmu."), "_blank");

  return (
    <div className="sx-form">
      <Tape />
      <span className="sx-form__eyebrow">Kirim pesan langsung</span>
      <h3 className="sx-form__title">LET'S CONNECT</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input type="text" className="sx-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register("honeypot")} />

        <div className="sx-field">
          <label htmlFor="cf-name">Nama kamu *</label>
          <input id="cf-name" className="sx-input" type="text" autoComplete="name" placeholder="Misal: Budi Santoso" {...register("name")} />
          {errors.name && <p className="sx-err" role="alert">{errors.name.message}</p>}
        </div>

        <div className="sx-field">
          <label htmlFor="cf-contact">Email / WhatsApp *</label>
          <input id="cf-contact" className="sx-input" type="text" inputMode="email" autoComplete="email" placeholder="nama@email.com atau 0812xxxx" {...register("contact")} />
          {errors.contact && <p className="sx-err" role="alert">{errors.contact.message}</p>}
        </div>

        <div className="sx-field">
          <label htmlFor="cf-message">Pesan atau pertanyaan *</label>
          <textarea id="cf-message" className="sx-input" rows={4} placeholder="Ceritakan ide websitemu, kebutuhan fitur, atau peluang kerja..." {...register("message")} />
          {errors.message && <p className="sx-err" role="alert">{errors.message.message}</p>}
        </div>

        <div className="sx-actions">
          <button type="submit" disabled={submitting} className="sx-btn sx-btn--navy">
            <Send size={15} /> {submitting ? "Mengirim..." : "Kirim pesan"}
          </button>
          <button type="button" onClick={openWhatsApp} className="sx-btn sx-btn--wa">
            <MessageSquare size={15} /> Via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
