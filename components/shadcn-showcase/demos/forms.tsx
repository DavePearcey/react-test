"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import ShowcaseSection from "../showcase-section";

const frameworks = ["Next.js", "React", "Vue", "Svelte"];

export function FormsDemos() {
  const [framework, setFramework] = useState<string | null>("Next.js");

  return (
    <>
      <ShowcaseSection title="Input">
        <Input placeholder="Email" className="max-w-xs" />
      </ShowcaseSection>

      <ShowcaseSection title="Input Group">
        <InputGroup className="max-w-xs">
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Textarea">
        <Textarea placeholder="Write something..." className="max-w-xs" />
      </ShowcaseSection>

      <ShowcaseSection title="Checkbox & Switch">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="airplane" />
          <Label htmlFor="airplane">Airplane mode</Label>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Radio Group">
        <RadioGroup defaultValue="comfortable" className="flex gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
        </RadioGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Select">
        <Select defaultValue="apple">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </ShowcaseSection>

      <ShowcaseSection title="Native Select">
        <NativeSelect className="w-40">
          <NativeSelectOption value="">Pick one</NativeSelectOption>
          <NativeSelectOption value="a">Option A</NativeSelectOption>
          <NativeSelectOption value="b">Option B</NativeSelectOption>
        </NativeSelect>
      </ShowcaseSection>

      <ShowcaseSection title="Slider">
        <Slider defaultValue={[50]} max={100} step={1} className="w-48" />
      </ShowcaseSection>

      <ShowcaseSection title="Input OTP">
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
      </ShowcaseSection>

      <ShowcaseSection title="Field">
        <FieldSet className="w-full max-w-sm">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="Jane Doe" />
              <FieldDescription>Your public display name.</FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </ShowcaseSection>

      <ShowcaseSection title="Combobox">
        <Combobox
          items={frameworks}
          value={framework}
          onValueChange={setFramework}
        >
          <ComboboxInput placeholder="Select framework..." className="w-48" />
          <ComboboxContent>
            <ComboboxEmpty>No results.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </ShowcaseSection>
    </>
  );
}
