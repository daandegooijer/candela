import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Verify webhook secret
  const secret = process.env.STORYBLOK_WEBHOOK_SECRET;

  if (!secret) {
    console.error("STORYBLOK_WEBHOOK_SECRET not configured");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  try {
    // Get the signature from headers
    const signature = request.headers.get("x-storyblok-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing webhook signature" },
        { status: 401 }
      );
    }

    // Get the request body
    const body = await request.text();

    // Verify the signature
    const crypto = require("crypto");
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.error("Invalid webhook signature");
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 401 }
      );
    }

    // Parse the webhook payload
    const payload = JSON.parse(body);

    // Get the story slug
    const storySlug = payload.story?.slug;
    const action = payload.action;

    if (!storySlug) {
      return NextResponse.json(
        { error: "No story slug in webhook" },
        { status: 400 }
      );
    }

    console.log(`Webhook received: ${action} - ${storySlug}`);

    // Revalidate all content with the "storyblok" tag
    revalidateTag("storyblok", "default");

    console.log(`Revalidated all content (tag: storyblok)`);

    return NextResponse.json(
      { success: true, message: `Revalidated all content for: ${storySlug}` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
