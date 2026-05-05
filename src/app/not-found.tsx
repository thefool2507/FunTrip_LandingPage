import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl mb-4">🗺️</p>
      <h1 className="text-4xl font-bold text-foreground mb-2">404 — Lost in Paradise</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Looks like this destination doesn&apos;t exist on our map. Let&apos;s get you back to safety.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
