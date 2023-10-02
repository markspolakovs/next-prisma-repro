import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const user = await prisma.user.findFirst();
  return NextResponse.next();
}
