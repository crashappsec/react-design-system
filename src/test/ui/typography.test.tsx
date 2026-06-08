import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  H1,
  H2,
  H3,
  P,
  Lead,
  Blockquote,
  InlineCode,
  Muted,
} from "@/registry/crashoverride/ui/typography"

describe("Typography", () => {
  it("H1 renders an <h1> in the display face", () => {
    render(<H1>Tag. Track. Trust.</H1>)
    const el = screen.getByText("Tag. Track. Trust.")
    expect(el.tagName).toBe("H1")
    expect(el.className).toMatch(/font-display/)
  })

  it("H2 renders an <h2> in the display face", () => {
    render(<H2>Section</H2>)
    const el = screen.getByText("Section")
    expect(el.tagName).toBe("H2")
    expect(el.className).toMatch(/font-display/)
  })

  it("H3 renders an <h3> in the display face", () => {
    render(<H3>Subsection</H3>)
    const el = screen.getByText("Subsection")
    expect(el.tagName).toBe("H3")
    expect(el.className).toMatch(/font-display/)
  })

  it("P renders a <p>", () => {
    render(<P>Body copy.</P>)
    expect(screen.getByText("Body copy.").tagName).toBe("P")
  })

  it("Lead renders a muted intro <p>", () => {
    render(<Lead>The Data Plane for Software.</Lead>)
    const el = screen.getByText("The Data Plane for Software.")
    expect(el.tagName).toBe("P")
    expect(el.className).toMatch(/text-muted-foreground/)
  })

  it("Blockquote renders a <blockquote> with a brand left rule", () => {
    render(<Blockquote>You can't secure what you can't see.</Blockquote>)
    const el = screen.getByText("You can't secure what you can't see.")
    expect(el.tagName).toBe("BLOCKQUOTE")
    expect(el.className).toMatch(/border-l/)
  })

  it("InlineCode renders a mono <code>", () => {
    render(<InlineCode>chalk insert</InlineCode>)
    const el = screen.getByText("chalk insert")
    expect(el.tagName).toBe("CODE")
    expect(el.className).toMatch(/font-mono/)
  })

  it("Muted renders muted-foreground text", () => {
    render(<Muted>last seen 14:02</Muted>)
    expect(screen.getByText("last seen 14:02").className).toMatch(
      /text-muted-foreground/,
    )
  })

  it("merges a custom className", () => {
    render(<P className="mt-4">spaced</P>)
    expect(screen.getByText("spaced").className).toMatch(/mt-4/)
  })
})
