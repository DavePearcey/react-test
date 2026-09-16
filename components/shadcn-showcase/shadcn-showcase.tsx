"use client";

import { ActionsDemos } from "./demos/actions";
import { ChatDemos } from "./demos/chat";
import { DataLayoutDemos } from "./demos/data-layout";
import { FormsDemos } from "./demos/forms";
import { OverlaysDemos } from "./demos/overlays";

export default function ShadcnShowcase() {
  return (
    <div className="space-y-4">
      <ActionsDemos />
      <FormsDemos />
      <OverlaysDemos />
      <DataLayoutDemos />
      <ChatDemos />
    </div>
  );
}
