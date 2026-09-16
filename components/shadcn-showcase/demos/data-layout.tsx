"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar } from "@/components/ui/calendar";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnaireProgress,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChevronDownIcon, InboxIcon, InfoIcon } from "lucide-react";
import ShowcaseSection from "../showcase-section";

const chartData = [
  { month: "Jan", visitors: 186 },
  { month: "Feb", visitors: 305 },
  { month: "Mar", visitors: 237 },
  { month: "Apr", visitors: 412 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
};

export function DataLayoutDemos() {
  return (
    <>
      <ShowcaseSection title="Accordion">
        <Accordion className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It uses WAI-ARIA patterns.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes with default styles.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ShowcaseSection>

      <ShowcaseSection title="Alert">
        <Alert className="max-w-md">
          <InfoIcon />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>You can add alerts to your app.</AlertDescription>
        </Alert>
      </ShowcaseSection>

      <ShowcaseSection title="Avatar">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ShowcaseSection>

      <ShowcaseSection title="Aspect Ratio">
        <p>Unnecesary because tailwind already has aspect classes for common ratios or you can just use <code className="code">aspect-[custom-ratio]</code>.</p>
        <AspectRatio ratio={16 / 9} className="w-48 overflow-hidden rounded-md bg-muted">
          <div className="flex size-full items-center justify-center text-sm">
            16:9
          </div>
        </AspectRatio>
      </ShowcaseSection>

      <ShowcaseSection title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shadcn</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ShowcaseSection>

      <ShowcaseSection title="Card">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Card content area.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Collapsible">
        <Collapsible className="w-full max-w-md">
          <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium">
            <ChevronDownIcon className="size-4" />
            Toggle details
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
            Hidden content revealed on click.
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseSection>

      <ShowcaseSection title="Empty">
        <Empty className="max-w-sm border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>No messages</EmptyTitle>
            <EmptyDescription>You do not have any messages yet.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ShowcaseSection>

      <ShowcaseSection title="Item">
        <ItemGroup className="w-full max-w-sm">
          <Item>
            <ItemMedia variant="icon">
              <InfoIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
              <ItemDescription>Manage alert preferences.</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Tabs">
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="text-sm">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password" className="text-sm">
            Change your password here.
          </TabsContent>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="Table">
        <Table className="max-w-md">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Alice</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ShowcaseSection>

      <ShowcaseSection title="Progress & Separator">
        <Progress value={66} className="w-48" />
        <Separator className="w-48" />
      </ShowcaseSection>

      <ShowcaseSection title="Scroll Area">
        <ScrollArea className="h-24 w-48 rounded-md border p-3">
          <div className="space-y-2 text-sm">
            {Array.from({ length: 8 }, (_, i) => (
              <p key={i}>Scrollable line {i + 1}</p>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseSection>

      <ShowcaseSection title="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ShowcaseSection>

      <ShowcaseSection title="Navigation Menu">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="block p-3 text-sm">
                  Introduction
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseSection>

      <ShowcaseSection title="Carousel">
        <div className="flex w-full flex-col items-center gap-3">
          <p className="w-full">I prefer swiperJS for carousels because it's more customizable and has more features.</p>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {["One", "Two", "Three"].map((slide) => (
                <CarouselItem key={slide}>
                  <div className="flex aspect-square items-center justify-center rounded-md border bg-muted">
                    {slide}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Calendar">
        <Calendar mode="single" className="rounded-md border" />
      </ShowcaseSection>

      <ShowcaseSection title="Chart">
        <ChartContainer config={chartConfig} className="h-48 w-full max-w-md">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
          </BarChart>
        </ChartContainer>
      </ShowcaseSection>

      <ShowcaseSection title="Resizable">
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-24 max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-3 text-sm">
              Panel A
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-3 text-sm">
              Panel B
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Sidebar">
        <div className="flex w-full flex-col gap-3">
          <SidebarProvider
            defaultOpen={false}
            className="relative isolate h-48 min-h-0 w-full max-w-md overflow-hidden rounded-lg border [transform:translateZ(0)]"
          >
            <Sidebar collapsible="offcanvas" className="!top-0 !h-full">
              <SidebarHeader className="p-2 text-sm font-medium">Menu</SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>App</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>Settings</SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <header className="flex h-10 shrink-0 items-center gap-2 border-b px-3">
                <SidebarTrigger />
                <span className="text-sm">Content</span>
              </header>
              <div className="p-3 text-sm text-muted-foreground">
                Main content area
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Questionnaire">
        <Questionnaire className="max-w-md">
          <QuestionnaireItem id="name" name="name">
            <QuestionnaireProgress />
            <QuestionnaireTitle>What should we call you?</QuestionnaireTitle>
            <QuestionnaireInput placeholder="Your name" />
            <QuestionnaireActions>
              <QuestionnaireNext />
            </QuestionnaireActions>
          </QuestionnaireItem>
        </Questionnaire>
      </ShowcaseSection>
    </>
  );
}
