import * as React from "react"

/**
 * Foundation doc helpers — small presentational primitives used by the MDX
 * Colors / Spacing / Radius pages. They are documentation-only (not part of the
 * registry) and live here so the MDX stays declarative.
 *
 * Tailwind v4 detects the arbitrary `bg-[var(--token)]` classes used below from
 * this source file, so they resolve to the active theme's token values and flip
 * live when the toolbar theme toggle changes `[data-theme]` on <html>.
 */

/** A single colour chip: a fixed-value brand colour (literal hex/var). */
export function Swatch({
  value,
  name,
  note,
}: {
  /** Any CSS colour — hex, oklch, or `var(--token)`. */
  value: string
  name: string
  note?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="h-16 w-full rounded-md border border-[var(--border)]"
        style={{ background: value }}
      />
      <div className="font-display text-sm font-semibold text-foreground">
        {name}
      </div>
      <code className="font-mono text-xs text-muted-foreground">{value}</code>
      {note ? (
        <div className="text-xs text-muted-foreground">{note}</div>
      ) : null}
    </div>
  )
}

/**
 * A semantic-token chip. Renders the swatch via the Tailwind utility class
 * (`bg-[var(--token)]`) so it REFLECTS THE ACTIVE THEME — flipping the toolbar
 * theme re-resolves the variable and the chip recolours live.
 */
export function TokenSwatch({
  token,
  bgClass,
  textClass,
  label,
}: {
  /** The CSS var name, e.g. `--primary` (shown to the reader). */
  token: string
  /** Tailwind class painting the chip, e.g. `bg-[var(--primary)]`. */
  bgClass: string
  /** Optional foreground sample text class, e.g. `text-[var(--primary-foreground)]`. */
  textClass?: string
  /** Human label, e.g. "Primary". */
  label: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={`flex h-16 w-full items-center justify-center rounded-md border border-[var(--border)] ${bgClass}`}
      >
        {textClass ? (
          <span className={`font-mono text-xs ${textClass}`}>Aa</span>
        ) : null}
      </div>
      <div className="font-display text-sm font-semibold text-foreground">
        {label}
      </div>
      <code className="font-mono text-xs text-muted-foreground">{token}</code>
    </div>
  )
}

/**
 * A token chip painted from its literal value via inline style. Unlike
 * `TokenSwatch` (which relies on a Tailwind `bg-[var(--token)]` utility), this
 * accepts ANY CSS value directly — hex, rgba, hsl — so it works for the full
 * palette including alpha overlays and syntax colours without needing a
 * pre-generated utility class. Shows the token name AND its resolved value.
 */
export function ScaleSwatch({
  name,
  value,
  note,
  /** Optional backdrop behind the chip — useful for alpha/translucent values. */
  on,
}: {
  /** Token name, e.g. `--color-neon-400`. */
  name: string
  /** Literal CSS value, e.g. `#B3FF00` or `rgba(...)`. */
  value: string
  note?: string
  on?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="h-16 w-full rounded-md border border-[var(--border)]"
        style={on ? { background: on } : undefined}
      >
        <div className="h-full w-full rounded-md" style={{ background: value }} />
      </div>
      <code className="font-mono text-xs font-semibold text-foreground">
        {name}
      </code>
      <code className="font-mono text-xs text-muted-foreground">{value}</code>
      {note ? (
        <div className="text-xs text-muted-foreground">{note}</div>
      ) : null}
    </div>
  )
}

/** Responsive grid wrapper for a row of swatches. */
export function Palette({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {children}
    </div>
  )
}

/**
 * A brand-asset card: renders an image (logo / illustration) at a real size on
 * a chosen backdrop, with a label and a one-line usage note. Used by the Brand
 * Assets MDX page. `bg` controls the panel behind the asset so white-fill marks
 * sit on dark and black-fill marks sit on light.
 */
export function AssetCard({
  src,
  alt,
  label,
  note,
  bg = "light",
  /** Rendered image height in px. Default 96. */
  height = 96,
  /** `contain` (default) keeps aspect; logos never crop. */
  fit = "contain",
}: {
  src: string
  alt: string
  label: string
  note?: string
  bg?: "light" | "dark" | "checker" | "surface"
  height?: number
  fit?: "contain" | "cover"
}) {
  const panelBg =
    bg === "dark"
      ? "#161616"
      : bg === "light"
        ? "#F7F6F5"
        : bg === "surface"
          ? "var(--card)"
          : // checker — neutral mid so both light & dark fills read
            "repeating-conic-gradient(#cfc9c3 0% 25%, #f7f6f5 0% 50%) 50% / 24px 24px"
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center justify-center rounded-md border border-[var(--border)] p-6"
        style={{ background: panelBg, minHeight: height + 48 }}
      >
        <img
          src={src}
          alt={alt}
          style={{ height, width: "auto", maxWidth: "100%", objectFit: fit }}
        />
      </div>
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="font-display text-sm font-semibold text-foreground">
          {label}
        </span>
        <code className="font-mono text-xs text-muted-foreground">
          {src.split("/").pop()}
        </code>
      </div>
      {note ? (
        <div className="text-xs text-muted-foreground">{note}</div>
      ) : null}
    </div>
  )
}

/** Two-column grid wrapper for brand-asset cards. */
export function AssetGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}

/** A horizontal bar used to visualise a spacing step. */
export function SpacingBar({
  label,
  rem,
  px,
}: {
  label: string
  rem: string
  px: number
}) {
  return (
    <div className="flex items-center gap-4">
      <code className="w-28 shrink-0 font-mono text-xs text-muted-foreground">
        {label} · {rem}
      </code>
      <div
        className="h-4 rounded-sm bg-[var(--primary)]"
        style={{ width: `${px}px` }}
      />
      <code className="font-mono text-xs text-muted-foreground">{px}px</code>
    </div>
  )
}

/** A box visualising a border-radius step. */
export function RadiusBox({
  label,
  radius,
}: {
  label: string
  radius: string
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="h-20 w-20 border border-[var(--primary)] bg-[var(--muted)]"
        style={{ borderRadius: radius }}
      />
      <code className="font-mono text-xs text-muted-foreground">{label}</code>
      <code className="font-mono text-xs text-muted-foreground">{radius}</code>
    </div>
  )
}
