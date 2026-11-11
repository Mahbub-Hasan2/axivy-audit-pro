import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f8fa] px-6 text-center text-[#10253e]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[.16em] text-[#087f7b]">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">This page is not part of the audit.</h1>
        <p className="mt-4 text-slate-600">Return to Axivy Audit Pro to start a website check.</p>
        <Link href="/" className="mt-8 inline-flex rounded-xl bg-[#10253e] px-5 py-3 font-bold text-white">Back home</Link>
      </div>
    </main>
  );
}
