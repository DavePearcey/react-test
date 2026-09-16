"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { toast } from "@/components/ui/toast";
import { BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon } from "lucide-react";
import ShowcaseSection from "../showcase-section";

export function ActionsDemos() {
  return (
    <>
      <ShowcaseSection title="Button">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </ShowcaseSection>

      <ShowcaseSection title="Button Group">
        <ButtonGroup>
          <Button variant="outline">Left</Button>
          <Button variant="outline">Center</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Badge">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle">
        <Toggle aria-label="Toggle bold">
          <StrikethroughIcon />
        </Toggle>
        |
        <ToggleGroup multiple defaultValue={["bold"]}>
          <ToggleGroupItem value="bold" aria-label="Bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Spinner & Skeleton">
        <p className="w-full">I like skeleton. It's a simple way to show a loading state. I like it because it can block out the real estate required as a placeholder, while also showing the user something is loading.</p>
        <Spinner />
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-24" />
      </ShowcaseSection>

      <ShowcaseSection title="Kbd">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Toast">
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: "Saved",
              description: "Your changes have been saved.",
              type: "success",
            })
          }
        >
          Show toast
        </Button>
      </ShowcaseSection>
    </>
  );
}
