import { NextRequest, NextResponse } from "next/server"

import { sendMail } from "@/lib/mail"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {
  
  const { message } = await request.json()

  try {
    await sendMail(process.env.GMAIL_USER!, "Notification from Project", message)
    return NextResponse.json({ message: "Mail Sent!" })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error})
  }
}