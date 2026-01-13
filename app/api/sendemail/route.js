import { NextResponse } from "next/server";
import Plunk from "@plunk/node";
import { render } from "@react-email/components";
import { Email } from "@/emails/NewTemplate";

const plunk = new Plunk(process.env.PLUNK_API_KEY);

export async function POST(req) {
  try {
    const { to, url } = await req.json();

    const emailHtml = await render(<Email url={url} />);

    await plunk.emails.send({
      to,
      subject: "Hello world",
      body: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
