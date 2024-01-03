import { WebhookEvent } from "@clerk/clerk-sdk-node";
import { headers } from "next/headers";
import { Webhook } from "svix";

import { WEBHOOK_SECRET } from "@/environments";

const webhookSecret: string = WEBHOOK_SECRET;

// Function to handle the webhook event
const handleWebhookEvent = (payload: any): WebhookEvent | null => {
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixIdTimeStamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    return null;
  }

  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  };

  // Create a new Webhook instance with your webhook secret
  const wh = new Webhook(webhookSecret);

  try {
    // Verify the webhook payload and headers
    const evt = wh.verify(JSON.stringify(payload), svixHeaders) as WebhookEvent;
    return evt; // Return the verified event object
  } catch (error: any) {
    throw new Error(error);
  }
};

export { handleWebhookEvent };
