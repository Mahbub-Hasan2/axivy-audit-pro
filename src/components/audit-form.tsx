"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "error" | "ready";

export default function AuditForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("website")?.toString().trim() ?? "";
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

    try {
      const url = new URL(withProtocol);
      if (!/^https?:$/.test(url.protocol) || !url.hostname.includes(".")) {
        throw new Error("Please enter a public website address.");
      }

      setState("ready");
      setMessage(`Ready to scan ${url.hostname}. The live audit engine is the next build milestone.`);
    } catch {
      setState("error");
      setMessage("Enter a valid public website, such as example.com.");
    }
  }

  return (
    <form id="audit" className="rounded-3xl bg-[#10253e] p-7 text-white shadow-2xl shadow-slate-900/15 sm:p-9" onSubmit={handleSubmit} noValidate>
      <p className="text-sm font-semibold text-[#36d5cb]">START YOUR FREE AUDIT</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">Your business deserves a clearer next step.</h2>
      <label className="mt-8 block text-sm font-medium" htmlFor="website">Website address</label>
      <input
        id="website"
        name="website"
        type="text"
        inputMode="url"
        autoComplete="url"
        placeholder="yourbusiness.com"
        aria-describedby="audit-help audit-status"
        className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-[#36d5cb] focus:ring-2 focus:ring-[#36d5cb]/30"
      />
      <button type="submit" className="mt-4 w-full rounded-xl bg-[#10bdb5] px-5 py-4 font-bold text-[#082039] transition hover:bg-[#36d5cb] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#10253e]">
        Check my website <span aria-hidden="true">→</span>
      </button>
      <p id="audit-help" className="mt-4 text-center text-xs leading-5 text-slate-400">No login required. The scoring engine will connect here in the next milestone.</p>
      {state !== "idle" && (
        <p id="audit-status" role="status" className={`mt-3 rounded-lg px-3 py-2 text-sm ${state === "ready" ? "bg-[#0d665f] text-white" : "bg-red-500/20 text-red-100"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
