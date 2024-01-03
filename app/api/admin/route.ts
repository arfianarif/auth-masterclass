import { currentRole } from "@/lib/auth-server";
import { NextResponse } from "next/server";

export async function GET() {
  const role = await currentRole()
  if (role === 'admin') {
    return new NextResponse(null, { status: 200 })
  }
  return new NextResponse(null, { status: 403 })
}