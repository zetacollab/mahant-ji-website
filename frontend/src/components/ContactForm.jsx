import { useMemo, useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactForm = ({ content }) => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDisabled = useMemo(
    () =>
      isSubmitting ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim(),
    [form, isSubmitting],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${BACKEND_URL}/api/inquiries`, form);
      toast.success(content.successToast);
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      toast.error(content.errorToast);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-5 rounded-[2rem] border border-[rgba(44,64,46,0.14)] bg-[#f9f8f6] p-6 shadow-[0_24px_80px_rgba(44,64,46,0.08)] md:p-8"
      data-testid="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <p
          className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]"
          data-testid="contact-form-eyebrow"
        >
          {content.eyebrow}
        </p>
        <h3
          className="font-[Playfair_Display] text-3xl text-[#1A1A1A]"
          data-testid="contact-form-title"
        >
          {content.title}
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          aria-label={content.placeholders.name}
          className="h-12 rounded-full border-[#d9d2c6] px-5"
          data-testid="contact-name-input"
          name="name"
          onChange={handleChange}
          placeholder={content.placeholders.name}
          required
          value={form.name}
        />
        <Input
          aria-label={content.placeholders.email}
          className="h-12 rounded-full border-[#d9d2c6] px-5"
          data-testid="contact-email-input"
          name="email"
          onChange={handleChange}
          placeholder={content.placeholders.email}
          required
          type="email"
          value={form.email}
        />
      </div>

      <Input
        aria-label={content.placeholders.phone}
        className="h-12 rounded-full border-[#d9d2c6] px-5"
        data-testid="contact-phone-input"
        name="phone"
        onChange={handleChange}
        placeholder={content.placeholders.phone}
        required
        value={form.phone}
      />

      <Textarea
        aria-label={content.placeholders.message}
        className="min-h-[140px] rounded-[1.5rem] border-[#d9d2c6] px-5 py-4"
        data-testid="contact-message-input"
        name="message"
        onChange={handleChange}
        placeholder={content.placeholders.message}
        required
        value={form.message}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#4A4A4A]" data-testid="contact-form-note">
          {content.note}
        </p>
        <Button
          className="h-12 rounded-full bg-[#2C402E] px-6 text-[#F9F8F6] hover:bg-[#1f2d20]"
          data-testid="contact-submit-button"
          disabled={isDisabled}
          type="submit"
        >
          {isSubmitting ? content.sending : content.submit}
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};