"use client";

import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
} from "@/components/ui/message";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerButton,
} from "@/components/ui/message-scroller";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileIcon } from "lucide-react";
import ShowcaseSection from "../showcase-section";

export function ChatDemos() {
  return (
    <>
      <ShowcaseSection title="Bubble">
        <BubbleGroup className="max-w-sm">
          <Bubble align="start">
            <BubbleContent>Hey, how is relearning react going?</BubbleContent>
          </Bubble>
          <Bubble align="end" variant="secondary">
            <BubbleContent>I got distracted by seeing how shadcn worked in react.</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Message">
        <MessageGroup className="max-w-sm">
          <Message>
            <MessageAvatar>
              <Avatar className="size-8">
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>Messages combine avatars and bubbles.</BubbleContent>
              </Bubble>
              <MessageFooter>Just now</MessageFooter>
            </MessageContent>
          </Message>
        </MessageGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Attachment">
        <Attachment className="max-w-xs">
          <AttachmentMedia>
            <FileIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>notes.txt</AttachmentTitle>
            <AttachmentDescription>2 KB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      </ShowcaseSection>

      <ShowcaseSection title="Message Scroller">
        <MessageScrollerProvider>
          <MessageScroller className="h-48 w-full max-w-sm rounded-lg border">
            <MessageScrollerViewport>
              <MessageScrollerContent>
                {Array.from({ length: 6 }, (_, i) => (
                  <Bubble key={i} align={i % 2 === 0 ? "start" : "end"} variant={i % 2 === 0 ? "default" : "secondary"}>
                    <BubbleContent>Message {i + 1}</BubbleContent>
                  </Bubble>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton direction="end" />
          </MessageScroller>
        </MessageScrollerProvider>
      </ShowcaseSection>
    </>
  );
}
