import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster, toast } from "./toaster"
import { Button } from "./button"

/**
 * Toaster — a stacked toast system on the brand surfaces, built on `sonner`.
 * Mount one `<Toaster />` near the app root, then fire toasts imperatively with
 * the re-exported `toast()` and its variants. Theme is detected from the
 * document root (`.dark` / `.light` / `[data-theme]`), so it tracks the
 * Storybook toolbar toggle with no provider.
 */
const meta = {
  title: "Components/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Mount `<Toaster />` once, then call `toast()`, `toast.success()`, `toast.error()`, etc. from anywhere. Toasts inherit the brand popover surface, hairline border, and mono description voice. `richColors` tints success/error variants.",
      },
    },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

/** Fully interactive — click a button to fire each variant. */
export const Playground: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Toaster richColors />
      <Button onClick={() => toast("Scan queued", { description: "zero-test-org" })}>
        Default
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.success("Artifact tagged", {
            description: "chalk · sha256:9f2c…",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="enterprise"
        onClick={() =>
          toast.error("Build failed", { description: "exit code 1 · step: test" })
        }
      >
        Error
      </Button>
    </div>
  ),
}

/** A single default toast. */
export const Default: Story = {
  render: () => (
    <>
      <Toaster richColors />
      <Button onClick={() => toast("Scan queued", { description: "zero-test-org" })}>
        Show toast
      </Button>
    </>
  ),
}

/** A success toast with rich colours. */
export const Success: Story = {
  render: () => (
    <>
      <Toaster richColors />
      <Button
        onClick={() =>
          toast.success("Artifact tagged", { description: "chalk · sha256:9f2c…" })
        }
      >
        Tag artifact
      </Button>
    </>
  ),
}

/** An error toast with rich colours. */
export const Error: Story = {
  render: () => (
    <>
      <Toaster richColors />
      <Button
        variant="enterprise"
        onClick={() =>
          toast.error("Build failed", { description: "exit code 1 · step: test" })
        }
      >
        Trigger failure
      </Button>
    </>
  ),
}

/** A toast with an action button. */
export const WithAction: Story = {
  render: () => (
    <>
      <Toaster richColors />
      <Button
        onClick={() =>
          toast("Token revoked", {
            description: "CI token · created 41 days ago",
            action: { label: "Undo", onClick: () => toast.success("Restored") },
          })
        }
      >
        Revoke token
      </Button>
    </>
  ),
}
