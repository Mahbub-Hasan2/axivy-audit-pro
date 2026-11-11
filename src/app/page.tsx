const checks = [
  ["01", "Mobile experience", "Can visitors use your site comfortably on a phone?"],
  ["02", "Contact readiness", "Can a ready-to-buy customer call or message you?"],
  ["03", "Trust signals", "Does your site give customers reasons to choose you?"],
  ["04", "Local discovery", "Can nearby customers find your business on Google?"],
  ["05", "Speed & clarity", "Does your first impression load quickly and make sense?"],
];

const steps = [
  ["01", "Add a website", "Paste a business website link."],
  ["02", "We check the essentials", "We scan its customer-facing experience."],
  ["03", "Get a fix plan", "Prioritized actions, explained plainly."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f8fa] text-[#10253e]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a className="flex items-center gap-2 font-bold tracking-tight" href="#top">
          <span className="grid size-9 place-items-center rounded-xl bg-[#10bdb5] text-lg text-[#09213a]">A</span>
          <span>AXIVY</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#how-it-works">How it works</a>
          <a href="#what-we-check">What we check</a>
          <a className="rounded-full bg-[#10253e] px-4 py-2 text-white" href="#audit">Run free audit</a>
        </div>
      </nav>

      <section id="top" className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex rounded-full bg-[#d9f8f4] px-3 py-1 text-xs font-bold uppercase tracking-[.16em] text-[#087f7b]">Free business audit</p>
          <h1 className="text-5xl font-bold tracking-[-.045em] text-[#10253e] sm:text-6xl">See what is costing your business customers.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Get a clear, plain-language review of your website in under a minute. Know what to fix first—and how it affects customers and sales.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">No jargon</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Built for mobile</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">English · বাংলা · العربية</span>
          </div>
        </div>

        <AuditForm />
      </section>

      <section id="what-we-check" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-[#087f7b]">Focused on conversion</p>
          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">Five checks that turn a technical audit into a practical sales plan.</h2>
            <p className="max-w-sm text-slate-600">Every finding connects the problem, its customer impact, the recommended fix and the service that can solve it.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {checks.map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-slate-200 p-5">
                <span className="text-sm font-bold text-[#10a9a2]">{number}</span>
                <h3 className="mt-8 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#087f7b]">Simple by design</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A useful audit, not another dashboard.</h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <li key={number} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="font-bold text-[#10a9a2]">{number}</span>
                <h3 className="mt-6 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="bg-[#10253e] px-6 py-8 text-sm text-slate-300 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 sm:flex-row"><p>© 2026 Axivy. Automation, analytics & business growth.</p><p>Built for businesses that want a clearer next step.</p></div>
      </footer>
    </main>
  );
}
import AuditForm from "@/components/audit-form";

