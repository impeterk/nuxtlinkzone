import { authOptions } from "./auth/[...]"
import { getServerSession, getServerToken} from "#auth"
import {db} from "@/server/utils/db"
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, authOptions)

  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'You are not authorized',
    })
  }

  

  return await db.query.pages.findMany({
    where: eq(pages.userId, session.user?.id!)
  })
})
