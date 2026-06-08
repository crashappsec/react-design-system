import * as React from "react"
import { Label } from "@/registry/crashoverride/ui/label"
import { cn } from "@/registry/crashoverride/lib/utils"

/**
 * Crash Override — Field
 * Composes a Label, a control, and help/error text into one accessible field.
 * Wrap any control (Input, Textarea, Select…) as children. When `htmlFor`/`id`
 * is supplied the label targets the control and `aria-describedby` /
 * `aria-invalid` are wired onto the single child control automatically.
 *
 *   <Field label="Work email" htmlFor="email" required error="Required">
 *     <Input id="email" type="email" />
 *   </Field>
 */
export interface FieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  label?: React.ReactNode
  /** id of the control this field labels (also used to derive describedby ids). */
  htmlFor?: string
  /** Help text shown below the control when there is no error. */
  hint?: React.ReactNode
  /** Error message — flips the message colour and marks the control invalid. */
  error?: React.ReactNode
  required?: boolean
  children: React.ReactNode
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, htmlFor, hint, error, required = false, children, ...props }, ref) => {
    const message = error ?? hint
    const messageId = htmlFor ? `${htmlFor}-message` : undefined

    // Wire accessibility onto a single control child when we can.
    let control = children
    if (htmlFor && React.isValidElement(children)) {
      const child = children as React.ReactElement<Record<string, unknown>>
      const describedBy = [child.props["aria-describedby"], message ? messageId : undefined]
        .filter(Boolean)
        .join(" ")
      control = React.cloneElement(child, {
        "aria-describedby": describedBy || undefined,
        "aria-invalid": error ? true : child.props["aria-invalid"],
      })
    }

    return (
      <div
        ref={ref}
        data-slot="field"
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
      >
        {label && (
          <Label htmlFor={htmlFor}>
            {label}
            {required && (
              <span aria-hidden className="text-destructive">
                *
              </span>
            )}
          </Label>
        )}
        {control}
        {message && (
          <span
            id={messageId}
            data-slot="field-message"
            className={cn(
              "font-mono text-[11px] leading-snug",
              error ? "text-destructive" : "text-muted-foreground",
            )}
          >
            {message}
          </span>
        )}
      </div>
    )
  },
)
Field.displayName = "Field"

export { Field }
