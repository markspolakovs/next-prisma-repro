import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from '@neondatabase/serverless'

import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const neon = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaNeon(neon)
  const prisma = new PrismaClient({ adapter })
  const user = await prisma.user.findFirst();
  return NextResponse.next();
}
