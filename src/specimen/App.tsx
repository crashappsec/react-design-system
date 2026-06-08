import { useState } from "react"
import { Stack, Group, Center, Box, Grid } from "@/registry/crashoverride/ui/layout"
import { Divider } from "@/registry/crashoverride/ui/divider"
import { Button } from "@/registry/crashoverride/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/crashoverride/ui/card"
import { Badge } from "@/registry/crashoverride/ui/badge"
import { Input } from "@/registry/crashoverride/ui/input"
import { Label } from "@/registry/crashoverride/ui/label"
import { Field } from "@/registry/crashoverride/ui/field"
import { Textarea } from "@/registry/crashoverride/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/registry/crashoverride/ui/select"
import { Checkbox } from "@/registry/crashoverride/ui/checkbox"
import { Switch } from "@/registry/crashoverride/ui/switch"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/crashoverride/ui/radio-group"
import { Slider } from "@/registry/crashoverride/ui/slider"
import { Toggle } from "@/registry/crashoverride/ui/toggle"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/crashoverride/ui/toggle-group"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/registry/crashoverride/ui/dialog"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/registry/crashoverride/ui/sheet"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/registry/crashoverride/ui/drawer"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/crashoverride/ui/popover"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/registry/crashoverride/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/registry/crashoverride/ui/dropdown-menu"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/registry/crashoverride/ui/command"
import { Combobox } from "@/registry/crashoverride/ui/combobox"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/crashoverride/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/crashoverride/ui/accordion"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/registry/crashoverride/ui/collapsible"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/registry/crashoverride/ui/alert-dialog"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/registry/crashoverride/ui/table"
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/registry/crashoverride/ui/alert"
import { Progress } from "@/registry/crashoverride/ui/progress"
import { Skeleton } from "@/registry/crashoverride/ui/skeleton"
import {
  Avatar,
  AvatarFallback,
  initials,
} from "@/registry/crashoverride/ui/avatar"
import { ScrollArea } from "@/registry/crashoverride/ui/scroll-area"
import { Spinner } from "@/registry/crashoverride/ui/spinner"
import {
  Separator,
} from "@/registry/crashoverride/ui/separator"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/crashoverride/ui/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/registry/crashoverride/ui/pagination"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/registry/crashoverride/ui/navigation-menu"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/registry/crashoverride/ui/context-menu"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/registry/crashoverride/ui/hover-card"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/registry/crashoverride/ui/menubar"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarInset,
  SidebarTrigger,
} from "@/registry/crashoverride/ui/sidebar"
import { IconButton } from "@/registry/crashoverride/ui/icon-button"
import { ButtonGroup } from "@/registry/crashoverride/ui/button-group"
import { AspectRatio } from "@/registry/crashoverride/ui/aspect-ratio"
import { InputGroup } from "@/registry/crashoverride/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/registry/crashoverride/ui/input-otp"
import { NativeSelect } from "@/registry/crashoverride/ui/native-select"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/registry/crashoverride/ui/resizable"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/registry/crashoverride/ui/carousel"
import { Toaster, toast } from "@/registry/crashoverride/ui/toaster"
import { Calendar } from "@/registry/crashoverride/ui/calendar"
import { DatePicker } from "@/registry/crashoverride/ui/date-picker"
import { StatusBadge } from "@/registry/crashoverride/ui/status-badge"
import { Tag } from "@/registry/crashoverride/ui/tag"
import { Kbd } from "@/registry/crashoverride/ui/kbd"
import { Empty } from "@/registry/crashoverride/ui/empty"
import { Item } from "@/registry/crashoverride/ui/item"
import {
  Search,
  CircleCheck,
  TriangleAlert,
  Info,
  CircleX,
  Cloud,
  Box as BoxIcon,
  ShieldCheck,
  Settings,
  Trash2,
  Pencil,
  Globe,
  Users,
  Inbox,
} from "lucide-react"

/**
 * Specimen app — local visual QA for the Crash Override registry.
 * Dark is the brand default; a toggle flips to light via [data-theme="light"]
 * on the document root. Each registry item gets a section here as it lands.
 */
export function App() {
  const [light, setLight] = useState(false)
  const [day, setDay] = useState<Date | undefined>(new Date())
  const [tags, setTags] = useState(["k8s", "us-east-1", "go"])

  function toggle() {
    const root = document.documentElement
    const next = !light
    setLight(next)
    // Support both selector conventions the theme keys off of.
    root.setAttribute("data-theme", next ? "light" : "dark")
    root.classList.toggle("light", next)
    root.classList.toggle("dark", !next)
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <header className="flex items-center justify-between border-b border-border pb-6 mb-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-chart-1">
            01 · design system
          </p>
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Crash Override
          </h1>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="bg-secondary text-secondary-foreground rounded-md px-4 h-10 font-mono text-sm border border-border"
        >
          {light ? "→ dark" : "→ light"}
        </button>
      </header>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Theme proof
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-primary text-primary-foreground rounded-md px-4 h-10 font-semibold">
            Primary action
          </button>
          <div className="bg-card text-card-foreground border border-border rounded-md px-4 py-3">
            Raised card surface
          </div>
          <span className="text-destructive font-mono text-sm">destructive</span>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Button
        </h2>
        <Group className="flex-wrap">
          <Button>Get Started</Button>
          <Button variant="secondary">Read the docs</Button>
          <Button variant="enterprise">Talk to a Human</Button>
          <Button variant="ghost">Cancel</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Layout primitives
        </h2>
        <Stack className="gap-4">
          <Group className="gap-2">
            <Box className="bg-card border border-border rounded-md px-3 py-2">Group A</Box>
            <Box className="bg-card border border-border rounded-md px-3 py-2">Group B</Box>
          </Group>
          <Divider />
          <Grid className="grid-cols-3">
            <Box className="bg-card border border-border rounded-md p-4">1</Box>
            <Box className="bg-card border border-border rounded-md p-4">2</Box>
            <Box className="bg-card border border-border rounded-md p-4">3</Box>
          </Grid>
          <Center className="h-24 bg-card border border-border rounded-md">
            <span className="font-mono text-sm">centered</span>
          </Center>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Card
        </h2>
        <Grid className="grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Plain card</CardTitle>
              <CardDescription>hairline border, no shadow</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Contrast comes from the border, never a background lift.
            </CardContent>
          </Card>
          <Card accent="magenta" interactive>
            <CardHeader>
              <CardTitle>Capability card</CardTitle>
              <CardDescription>accent bar + hover</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Hover me — border brightens, surface lifts.
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary">
                Inspect
              </Button>
            </CardFooter>
          </Card>
          <Card accent="neon">
            <CardHeader>
              <CardTitle>Neon accent</CardTitle>
              <CardDescription>lime capability bar</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Any palette key or CSS colour works.
            </CardContent>
          </Card>
        </Grid>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Badge
        </h2>
        <Group className="flex-wrap">
          <Badge tone="neon" dot>
            active
          </Badge>
          <Badge tone="cobalt">enterprise</Badge>
          <Badge tone="magenta" variant="outline">
            inspect
          </Badge>
          <Badge tone="amber">3 expiring</Badge>
          <Badge tone="teal" variant="outline">
            healthy
          </Badge>
          <Badge tone="danger" dot>
            critical
          </Badge>
          <Badge>neutral</Badge>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Forms — Input / Label / Field / Textarea
        </h2>
        <Stack className="gap-4 max-w-md">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="bare-email">Work email</Label>
            <Input id="bare-email" type="email" placeholder="you@company.com" />
          </div>
          <Field label="API key" htmlFor="api-key" hint="Read-only token" required>
            <Input id="api-key" placeholder="ghp_…" />
          </Field>
          <Field label="Email" htmlFor="err-email" error="Required">
            <Input id="err-email" type="email" placeholder="you@company.com" />
          </Field>
          <Field label="Incident notes" htmlFor="notes">
            <Textarea id="notes" rows={4} placeholder="Describe the incident…" />
          </Field>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Select
        </h2>
        <Stack className="gap-4 max-w-md">
          <Field label="Region" htmlFor="region">
            <Select>
              <SelectTrigger id="region">
                <SelectValue placeholder="Pick a region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us-east-1">us-east-1</SelectItem>
                <SelectItem value="eu-west-1">eu-west-1</SelectItem>
                <SelectItem value="ap-south-1">ap-south-1</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Checkbox / Switch
        </h2>
        <Stack className="gap-4">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox defaultChecked /> Notify on critical findings
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox /> I agree to the terms
          </label>
          <Group className="gap-3">
            <Switch defaultChecked aria-label="auto-remediate" />
            <span className="text-sm">Auto-remediate</span>
          </Group>
          <Group className="gap-3">
            <Switch aria-label="public" />
            <span className="text-sm">Public registry</span>
          </Group>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          RadioGroup
        </h2>
        <RadioGroup defaultValue="prod">
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="prod" /> Production
          </label>
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="staging" /> Staging
          </label>
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="dev" /> Development
          </label>
        </RadioGroup>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Slider
        </h2>
        <Stack className="gap-6 max-w-md">
          <Slider defaultValue={[40]} aria-label="threshold" />
          <Slider defaultValue={[20, 80]} aria-label="range" />
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Toggle / ToggleGroup
        </h2>
        <Stack className="gap-4">
          <Group className="gap-2">
            <Toggle defaultPressed aria-label="bold">
              B
            </Toggle>
            <Toggle aria-label="italic">I</Toggle>
            <Toggle variant="outline" aria-label="underline">
              U
            </Toggle>
          </Group>
          <ToggleGroup type="single" defaultValue="grid">
            <ToggleGroupItem value="grid">grid</ToggleGroupItem>
            <ToggleGroupItem value="list">list</ToggleGroupItem>
            <ToggleGroupItem value="board">board</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="multiple" defaultValue={["bold"]} size="sm">
            <ToggleGroupItem value="bold">B</ToggleGroupItem>
            <ToggleGroupItem value="italic">I</ToggleGroupItem>
            <ToggleGroupItem value="underline">U</ToggleGroupItem>
          </ToggleGroup>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Overlays — Dialog / Sheet / Drawer
        </h2>
        <Group className="flex-wrap">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Rotate key</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rotate API key</DialogTitle>
                <DialogDescription>
                  Your current key stops working immediately.
                </DialogDescription>
              </DialogHeader>
              <Field label="Confirm service name" htmlFor="confirm-name">
                <Input id="confirm-name" placeholder="zero-test-org" />
              </Field>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button>Rotate</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary">Filters</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Narrow the result set.</SheetDescription>
              </SheetHeader>
              <Stack className="gap-3 mt-4">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox defaultChecked /> Healthy
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox /> At risk
                </label>
              </Stack>
            </SheetContent>
          </Sheet>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost">Quick actions</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Quick actions</DrawerTitle>
                <DrawerDescription>Run a task on this service.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Re-scan now</Button>
                <DrawerClose asChild>
                  <Button variant="secondary">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Overlays — Popover / Tooltip / DropdownMenu
        </h2>
        <TooltipProvider>
          <Group className="flex-wrap">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">Info</Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm">Beaconing from prod since 14:02.</p>
              </PopoverContent>
            </Popover>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Copy SBOM</Button>
              </TooltipTrigger>
              <TooltipContent>copy sbom</TooltipContent>
            </Tooltip>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">More</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Service</DropdownMenuLabel>
                <DropdownMenuItem>
                  Rename
                  <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>Re-scan</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Group>
        </TooltipProvider>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Command palette
        </h2>
        <div className="max-w-md rounded-lg border border-border shadow-md">
          <Command>
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandEmpty>No results.</CommandEmpty>
              <CommandGroup heading="Actions">
                <CommandItem>
                  <Search />
                  Search services
                  <CommandShortcut>⌘K</CommandShortcut>
                </CommandItem>
                <CommandItem>Re-scan org</CommandItem>
              </CommandGroup>
              <CommandGroup heading="Navigation">
                <CommandItem>Go to dashboard</CommandItem>
                <CommandItem>Open settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Combobox
        </h2>
        <div className="max-w-xs">
          <Combobox
            options={["us-east-1", "eu-west-1", "ap-south-1"]}
            placeholder="Pick a region"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Tabs
        </h2>
        <Tabs defaultValue="30d" className="max-w-md">
          <TabsList>
            <TabsTrigger value="30d">30 days</TabsTrigger>
            <TabsTrigger value="all">All time</TabsTrigger>
            <TabsTrigger value="pipe">
              Pipeline
              <Badge tone="amber">7</Badge>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="30d" className="text-sm text-muted-foreground">
            Last 30 days of activity.
          </TabsContent>
          <TabsContent value="all" className="text-sm text-muted-foreground">
            Everything ever recorded.
          </TabsContent>
          <TabsContent value="pipe" className="text-sm text-muted-foreground">
            7 services in the pipeline.
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Accordion
        </h2>
        <Accordion type="single" collapsible className="max-w-md">
          <AccordionItem value="chalk">
            <AccordionTrigger>What does Chalk record?</AccordionTrigger>
            <AccordionContent>
              A deterministic SBOM + provenance for every build artifact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="oss">
            <AccordionTrigger>Is it open source?</AccordionTrigger>
            <AccordionContent>Yes — GPL-licensed.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Collapsible
        </h2>
        <Collapsible className="max-w-md space-y-2">
          <CollapsibleTrigger asChild>
            <Button variant="ghost">Toggle details</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md border border-border p-3 text-sm text-muted-foreground">
            3 services beaconing from prod since 14:02.
          </CollapsibleContent>
        </Collapsible>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          AlertDialog
        </h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="secondary">Delete service</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete service?</AlertDialogTitle>
              <AlertDialogDescription>
                This permanently removes the service and its scan history. This
                cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Table
        </h2>
        <div className="max-w-2xl rounded-md border border-border">
          <Table>
            <TableCaption>Service builds · last 24h</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Env</TableHead>
                <TableHead className="text-right font-mono tabular-nums">
                  Builds
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "chalk", env: "prod", builds: "1,204" },
                { name: "compass", env: "staging", builds: "318" },
                { name: "beacon", env: "dev", builds: "27" },
              ].map((r) => (
                <TableRow key={r.name}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>
                    <Badge tone="cobalt">{r.env}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono tabular-nums">
                    {r.builds}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Alert
        </h2>
        <Stack className="max-w-xl gap-3">
          <Alert variant="success">
            <CircleCheck />
            <AlertTitle>Artifact tagged</AlertTitle>
            <AlertDescription>
              Provenance recorded and beaconing from production.
            </AlertDescription>
          </Alert>
          <Alert variant="info">
            <Info />
            <AlertTitle>New scan available</AlertTitle>
            <AlertDescription>
              A fresh SBOM is ready for chalk.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <TriangleAlert />
            <AlertTitle>Certificate expiring</AlertTitle>
            <AlertDescription>
              The signing certificate expires in 6 days.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <CircleX />
            <AlertTitle>Certificate expired</AlertTitle>
          </Alert>
          <Alert>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>A neutral, default banner.</AlertDescription>
          </Alert>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Progress
        </h2>
        <Stack className="max-w-md gap-4">
          <Progress value={72} />
          <Progress value={28} className="[&>div]:bg-chart-3" />
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Skeleton
        </h2>
        <div className="flex max-w-md items-center gap-4">
          <Skeleton className="size-11 rounded-full" />
          <Stack className="flex-1 gap-2">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-3 w-full" />
          </Stack>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Avatar
        </h2>
        <Group className="items-center gap-4">
          <Avatar size="xs">
            <AvatarFallback>{initials("Savannah Nguyen")}</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>{initials("Floyd Miles")}</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback>{initials("Devon Lane")}</AvatarFallback>
          </Avatar>
          <Avatar size="lg" ring>
            <AvatarFallback>{initials("Jane Cooper")}</AvatarFallback>
          </Avatar>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Separator
        </h2>
        <Stack className="max-w-md gap-3">
          <div className="text-sm text-muted-foreground">Above the rule</div>
          <Separator />
          <div className="text-sm text-muted-foreground">Below the rule</div>
          <Group className="h-5 items-center gap-3 text-sm text-muted-foreground">
            <span>chalk</span>
            <Separator orientation="vertical" />
            <span>compass</span>
            <Separator orientation="vertical" />
            <span>beacon</span>
          </Group>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          ScrollArea
        </h2>
        <ScrollArea className="h-40 max-w-xs rounded-md border border-border p-3">
          <Stack className="gap-2 text-sm text-muted-foreground">
            {Array.from({ length: 24 }, (_, i) => (
              <div key={i} className="font-mono">
                repo-{String(i + 1).padStart(2, "0")}.git
              </div>
            ))}
          </Stack>
        </ScrollArea>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Spinner
        </h2>
        <Group className="items-center gap-6">
          <Spinner className="size-4" />
          <Spinner className="size-6 text-chart-1" />
          <Button disabled>
            <Spinner className="mr-2 size-4" />
            Saving…
          </Button>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Breadcrumb
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">prod</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>prod-bandwidth-system</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Pagination
        </h2>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">12</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          NavigationMenu
        </h2>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[280px] gap-1 p-2">
                  <NavigationMenuLink href="#">
                    <div className="font-medium">Compass</div>
                    <div className="text-muted-foreground">
                      Repository health across portfolios.
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <div className="font-medium">Beacon</div>
                    <div className="text-muted-foreground">
                      Continuous llms.txt + reports.
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Docs</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Menubar
        </h2>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New scan<MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open<MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem variant="destructive">Delete</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo<MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          ContextMenu
        </h2>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-28 max-w-md items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
            Right-click this region
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Service</ContextMenuLabel>
            <ContextMenuItem>
              Open<ContextMenuShortcut>⌘O</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Rename</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          HoverCard
        </h2>
        <div className="text-sm text-muted-foreground">
          Reported by{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="#" className="font-mono text-foreground underline">
                @savannah
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex items-center gap-3">
                <Avatar size="md">
                  <AvatarFallback>{initials("Savannah Nguyen")}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    Savannah Nguyen
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Maintainer · 142 repos
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Sidebar
        </h2>
        <div className="h-72 max-w-2xl overflow-hidden rounded-md border border-border">
          <SidebarProvider className="min-h-0 h-full">
            <Sidebar collapsible="icon" className="absolute">
              <SidebarHeader>
                <span className="font-display text-sm font-bold tracking-[-0.01em] text-sidebar-foreground group-data-[collapsible=icon]:hidden">
                  Crash Override
                </span>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Catalog</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive tooltip="Services">
                        <Cloud />
                        <span>Services</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Packages">
                        <BoxIcon />
                        <span>Packages</span>
                      </SidebarMenuButton>
                      <SidebarMenuBadge>12</SidebarMenuBadge>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Policies">
                        <ShieldCheck />
                        <span>Policies</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <div className="flex items-center gap-2 border-b border-border p-3">
                <SidebarTrigger />
                <span className="font-mono text-xs text-muted-foreground">
                  prod-bandwidth-system
                </span>
              </div>
              <div className="p-4 text-sm text-muted-foreground">
                Toggle the rail with the button (or ⌘B).
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          IconButton / ButtonGroup
        </h2>
        <Stack className="gap-4">
          <Group className="gap-2">
            <IconButton label="Settings">
              <Settings />
            </IconButton>
            <IconButton label="Edit" variant="outline">
              <Pencil />
            </IconButton>
            <IconButton label="Delete" variant="solid">
              <Trash2 />
            </IconButton>
            <IconButton label="Small" size="sm" variant="outline">
              <Search />
            </IconButton>
          </Group>
          <ButtonGroup>
            <Button variant="secondary">Day</Button>
            <Button variant="secondary">Week</Button>
            <Button variant="secondary">Month</Button>
          </ButtonGroup>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Forms — InputGroup / NativeSelect / InputOTP
        </h2>
        <Stack className="gap-4 max-w-md">
          <InputGroup
            prefix="https://"
            suffix=".crashoverride.com"
            placeholder="my-org"
          />
          <NativeSelect options={["Low", "Medium", "High"]} aria-label="severity" />
          <InputOTP maxLength={6}>
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
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          AspectRatio
        </h2>
        <div className="max-w-sm">
          <AspectRatio ratio={16 / 9}>
            <Center className="size-full rounded-md border border-border bg-card text-sm text-muted-foreground">
              16 : 9
            </Center>
          </AspectRatio>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Resizable
        </h2>
        <div className="h-44 max-w-2xl overflow-hidden rounded-md border border-border">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize={40}>
              <Center className="size-full p-4 text-sm text-muted-foreground">
                Catalog
              </Center>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60}>
              <Center className="size-full p-4 text-sm text-muted-foreground">
                Detail
              </Center>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Carousel
        </h2>
        <div className="mx-12 max-w-sm">
          <Carousel>
            <CarouselContent>
              {["chalk", "compass", "beacon"].map((s) => (
                <CarouselItem key={s}>
                  <Center className="h-32 rounded-md border border-border bg-card font-mono text-sm">
                    {s}
                  </Center>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Toaster
        </h2>
        <Group className="gap-2 flex-wrap">
          <Button onClick={() => toast("Re-scan queued")}>Toast</Button>
          <Button
            variant="secondary"
            onClick={() => toast.success("Artifact tagged")}
          >
            Success
          </Button>
          <Button
            variant="ghost"
            onClick={() => toast.error("Certificate expired")}
          >
            Error
          </Button>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Calendar / DatePicker
        </h2>
        <Group className="flex-wrap items-start gap-6">
          <Calendar
            mode="single"
            selected={day}
            onSelect={setDay}
            className="rounded-md border border-border"
          />
          <Stack className="gap-3">
            <DatePicker
              value={day}
              onChange={setDay}
              placeholder="Pick a date"
            />
            <span className="font-mono text-xs text-muted-foreground">
              {day ? day.toDateString() : "no date selected"}
            </span>
          </Stack>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          StatusBadge
        </h2>
        <Group className="flex-wrap">
          <StatusBadge status="healthy" />
          <StatusBadge status="needs_attention" />
          <StatusBadge status="at_risk" />
          <StatusBadge status="critical" />
          <StatusBadge status="stale" />
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Tag
        </h2>
        <Stack className="gap-3">
          <Group className="flex-wrap gap-4">
            <Tag icon={<Globe />} label="us-east-1" />
            <Tag icon={<Users />} label="12 contributors" />
            <Tag label="SLSA" value="Level 2" />
          </Group>
          <Group className="flex-wrap">
            {tags.map((t) => (
              <Tag
                key={t}
                label={t}
                onRemove={() => setTags((prev) => prev.filter((x) => x !== t))}
              />
            ))}
          </Group>
        </Stack>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Kbd
        </h2>
        <Group className="items-center gap-2 text-sm text-muted-foreground">
          <span>
            <Kbd>⌘</Kbd> <Kbd>K</Kbd>
          </span>
          <span className="ml-4">
            <Kbd>Ctrl</Kbd> <Kbd>⇧</Kbd> <Kbd>P</Kbd>
          </span>
        </Group>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Empty
        </h2>
        <div className="max-w-md">
          <Empty
            icon={<Inbox />}
            title="No deployments yet"
            description="Ship something and it'll beacon back here."
            action={<Button>Read the docs</Button>}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-mono">
          Item
        </h2>
        <Stack className="max-w-md gap-2">
          <Item
            media={
              <Avatar size="md">
                <AvatarFallback>{initials("Floyd Miles")}</AvatarFallback>
              </Avatar>
            }
            title="Floyd Miles"
            description="floyd@crashoverride.com"
            actions={<Badge tone="neon">admin</Badge>}
          />
          <Item
            interactive
            media={<Cloud />}
            title="prod-bandwidth-system"
            description="us-east-1 · beaconing since 14:02"
            actions={<StatusBadge status="healthy" />}
          />
        </Stack>
      </section>

      <Toaster richColors closeButton />
    </div>
  )
}
