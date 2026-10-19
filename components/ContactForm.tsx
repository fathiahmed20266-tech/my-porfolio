"use client";

import { FormEvent, useId, useState } from "react";
import { profile } from "@/data/profile";

type Props = {
  inputClassName: string;
  buttonClassName: string;
};

const FORM_ERROR = "يرجى إدخال الاسم والرسالة قبل فتح واتساب.";

/** Client-only form: validates required fields, then opens WhatsApp with encoded text. */
export function ContactForm({ inputClassName, buttonClassName }: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const errorId = useId();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) {
      setError(FORM_ERROR);
      return;
    }
    setError("");
    const text = encodeURIComponent(`الاسم: ${trimmedName}\n${trimmedMessage}`);
    window.open(`${profile.contact.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <label className="grid gap-1 text-sm">
        <span>{profile.copy.formName}</span>
        <input
          name="name"
          autoComplete="name"
          required
          value={name}
          aria-invalid={Boolean(error) && !name.trim()}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError("");
          }}
          className={inputClassName}
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span>{profile.copy.formMessage}</span>
        <textarea
          name="message"
          rows={4}
          required
          value={message}
          aria-invalid={Boolean(error) && !message.trim()}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => {
            setMessage(e.target.value);
            if (error) setError("");
          }}
          className={inputClassName}
        />
      </label>
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-accent">
          {error}
        </p>
      ) : null}
      <button type="submit" className={buttonClassName}>
        {profile.copy.formSubmit}
      </button>
    </form>
  );
}
