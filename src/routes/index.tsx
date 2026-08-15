import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GenLayerSpinner } from "@/components/GenLayerSpinner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GenLayer Consensus Spinner — Portal Loading System" },
      {
        name: "description",
        content:
          "An original, brand-native loading spinner for the GenLayer Portal: three validators reaching consensus around an intelligent-contract core. Pure SVG + CSS, light and dark ready.",
      },
      { property: "og:title", content: "GenLayer Consensus Spinner" },
      {
        property: "og:description",
        content:
          "Brand-native loading motion for the GenLayer Portal — smooth infinite loop, readable at 16px, light and dark ready.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Showcase,
});

function Panel({
  tone,
  children,
  title,
  note,
}: {
  tone: "light" | "dark";
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        tone === "dark"
          ? "dark rounded-2xl border border-gl-brand/20 bg-gl-ink p-8"
          : "rounded-2xl border border-border bg-card p-8"
      }
    >
      <div className="flex min-h-40 items-center justify-center">{children}</div>
      <p className={tone === "dark" ? "mt-6 text-sm font-medium text-gl-brand" : "mt-6 text-sm font-medium text-gl-brand-deep"}>
        {title}
      </p>
      <p className={tone === "dark" ? "mt-1 text-sm text-white/60" : "mt-1 text-sm text-muted-foreground"}>
        {note}
      </p>
    </div>
  );
}

function Showcase() {
  const [speed, setSpeed] = useState(1);

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <GenLayerSpinner size={112} label={null} />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gl-brand-deep">
              GenLayer Portal · Motion
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              The Consensus Spinner
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Three validators orbit an intelligent-contract core. A proposal sweeps the ring, each
              validator lights as it votes, and the core settles on finality — one full round every
              1.6 seconds, forever.
            </p>
          </div>
        </header>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Panel
            tone="light"
            title="Light surface"
            note="Deep teal core keeps contrast on white cards and modals."
          >
            <GenLayerSpinner size={72} label={null} />
          </Panel>
          <Panel
            tone="dark"
            title="Dark surface"
            note="Brand green lifts to full luminance on Portal ink backgrounds."
          >
            <GenLayerSpinner size={72} label={null} />
          </Panel>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Scales down cleanly
          </h2>
          <div className="mt-8 flex flex-wrap items-end gap-10">
            {([16, 24, 40, 64] as const).map((s) => (
              <div key={s} className="flex flex-col items-center gap-3">
                <GenLayerSpinner size={s} label={null} />
                <span className="text-xs tabular-nums text-muted-foreground">{s}px</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              In context
            </h2>
            <div className="mt-6 space-y-4">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-gl-ink px-5 py-3 text-sm font-medium text-gl-brand"
              >
                <GenLayerSpinner size={16} label={null} />
                Deploying intelligent contract
              </button>
              <div className="flex items-center gap-3 rounded-lg border border-border px-5 py-4">
                <GenLayerSpinner size={24} label={null} />
                <span className="text-sm text-muted-foreground">Fetching validator set…</span>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-5 py-10">
                <GenLayerSpinner size={48} label="Loading page" />
                <span className="text-sm text-muted-foreground">Full-page loading state</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Tempo
            </h2>
            <div className="mt-10 flex justify-center">
              <GenLayerSpinner size={96} speed={speed} label={null} />
            </div>
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.1}
              value={speed}
              aria-label="Spinner speed"
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="mt-10 w-full accent-gl-brand-deep"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              {(1.6 / speed).toFixed(2)}s per consensus round. Honors{" "}
              <code className="text-xs">prefers-reduced-motion</code> by dropping to a single calm
              rotation.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Usage
          </h2>
          <pre className="mt-5 overflow-x-auto rounded-lg bg-muted p-5 text-xs leading-relaxed text-foreground">
{`import { GenLayerSpinner } from "@/components/GenLayerSpinner";

<GenLayerSpinner />                      // 40px, labelled "Loading"
<GenLayerSpinner size="xs" label={null} />  // 16px, inside a button
<GenLayerSpinner size={96} speed={0.8} />   // full-page, slower round`}
          </pre>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Inline SVG plus CSS transforms only — no runtime, no JS timers, no layout thrash. Colors
            resolve from the design tokens <code className="text-xs">--gl-brand</code> and{" "}
            <code className="text-xs">--gl-brand-deep</code>, so light and dark themes are automatic.
          </p>
        </div>
      </section>
    </main>
  );
}
