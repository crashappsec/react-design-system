import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Combobox } from "@/registry/crashoverride/ui/combobox"

describe("Combobox", () => {
  it("renders a closed trigger in the Input voice with the placeholder", () => {
    render(
      <Combobox
        options={["us-east-1", "eu-west-1", "ap-south-1"]}
        placeholder="Pick a region"
      />,
    )
    const trigger = screen.getByRole("combobox")
    expect(trigger).toHaveTextContent("Pick a region")
    expect(trigger.className).toMatch(/border-input/)
    expect(trigger.className).toMatch(/rounded-md/)
    // Closed: the searchable list is not mounted yet.
    expect(screen.queryByPlaceholderText("Search…")).not.toBeInTheDocument()
  })

  it("opens on click and reveals the searchable command list of options", () => {
    render(
      <Combobox options={["us-east-1", "eu-west-1", "ap-south-1"]} />,
    )
    fireEvent.click(screen.getByRole("combobox"))
    expect(screen.getByPlaceholderText("Search…")).toBeInTheDocument()
    expect(screen.getByText("us-east-1")).toBeInTheDocument()
    expect(screen.getByText("eu-west-1")).toBeInTheDocument()
  })
})
