"use client";

import { useState } from "react";
import { ButtonNative } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-2 text-sm">
          <span className="text-[var(--color-muted)]">Name</span>
          <input
            name="name"
            autoComplete="name"
            className="w-full rounded-xl border border-[var(--color-border)] bg-[#0f111a] px-4 py-3 text-[var(--color-foreground)] outline-none transition focus:border-white/25"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span className="text-[var(--color-muted)]">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-[var(--color-border)] bg-[#0f111a] px-4 py-3 text-[var(--color-foreground)] outline-none transition focus:border-white/25"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm">
        <span className="text-[var(--color-muted)]">Topic</span>
        <select
          name="topic"
          className="w-full rounded-xl border border-[var(--color-border)] bg-[#0f111a] px-4 py-3 text-[var(--color-foreground)] outline-none transition focus:border-white/25"
          defaultValue="editorial"
        >
          <option value="editorial">Editorial question</option>
          <option value="correction">Correction</option>
          <option value="licensing">Licensing or legal</option>
        </select>
      </label>
      <label className="block space-y-2 text-sm">
        <span className="text-[var(--color-muted)]">Message</span>
        <textarea
          name="message"
          rows={6}
          className="w-full resize-y rounded-xl border border-[var(--color-border)] bg-[#0f111a] px-4 py-3 text-[var(--color-foreground)] outline-none transition focus:border-white/25"
          placeholder="How can we help?"
          required
        />
      </label>
      <p className="text-xs text-[var(--color-muted)]">
        This demo form does not send email. Wire your own endpoint or provider
        in production.
      </p>
      <ButtonNative type="submit" disabled={sent}>
        {sent ? "Thanks — demo only" : "Send message"}
      </ButtonNative>
    </form>
  );
}
