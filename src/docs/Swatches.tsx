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

/** Responsive grid wrapper for a row of swatches. */
export function Palette({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
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
