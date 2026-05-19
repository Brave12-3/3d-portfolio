"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type Form = { name: string; email: string; message: string };

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<Form>();
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function onSubmit(data: Form) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify(data) });
      if (res.ok) { setStatus("success"); reset(); } else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="mt-16 mb-12">
      <h2 className="text-2xl font-bold">Get in touch</h2>
      <div className="mt-6 max-w-xl bg-white/70 dark:bg-gray-900/60 p-6 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          <input {...register("name", { required: true })} className="border rounded px-3 py-2" placeholder="Your name" />
          <input {...register("email", { required: true })} className="border rounded px-3 py-2" placeholder="your@email.com" />
          <textarea {...register("message", { required: true })} rows={5} className="border rounded px-3 py-2" placeholder="Describe the project..." />
          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">Send</button>
            <div className="text-xs text-gray-500">Prefer email? <a href="mailto:hello@example.com" className="underline">hello@example.com</a></div>
          </div>

          {status==="success" && <p className="text-green-600">Message sent ✅</p>}
          {status==="error" && <p className="text-red-600">Failed to send.</p>}
        </form>
      </div>
    </section>
  );
}
