import { render, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/registry/crashoverride/ui/input-otp"

function Otp({ onComplete }: { onComplete?: (v: string) => void }) {
  return (
    <InputOTP maxLength={6} onComplete={onComplete}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

describe("InputOTP", () => {
  it("renders a six-slot field with a hidden input", () => {
    const { container } = render(<Otp />)
    expect(
      container.querySelectorAll('[data-slot="input-otp-slot"]').length,
    ).toBe(6)
    expect(container.querySelector("input")).not.toBeNull()
  })

  it("renders the separator between groups", () => {
    const { container } = render(<Otp />)
    expect(
      container.querySelector('[data-slot="input-otp-separator"]'),
    ).not.toBeNull()
  })

  it("fires onComplete when all slots are filled", () => {
    const onComplete = vi.fn()
    const { container } = render(<Otp onComplete={onComplete} />)
    const input = container.querySelector("input") as HTMLInputElement
    fireEvent.change(input, { target: { value: "123456" } })
    expect(onComplete).toHaveBeenCalledWith("123456")
  })
})
