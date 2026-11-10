import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, goal, preferredTime, page, utm_source, utm_medium, utm_campaign, utm_content } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const leadData = {
      name,
      phone,
      goal: goal || null,
      preferredTime: preferredTime || null,
      page: page || "yogher",
      utm_source: utm_source || "",
      utm_medium: utm_medium || "",
      utm_campaign: utm_campaign || "",
      utm_content: utm_content || "",
      timestamp: new Date().toISOString(),
    };

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
      } catch (webhookErr) {
        console.error("Error forwarding lead to webhook:", webhookErr);
        // Continue and return success so user experience is not blocked
      }
    } else {
      console.log("[DEV MODE] Lead received (no LEAD_WEBHOOK_URL set):", leadData);
    }

    return NextResponse.json({
      success: true,
      message: "Lead received successfully.",
    });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json(
      { error: "Failed to process lead submission." },
      { status: 500 }
    );
  }
}
