import { authOptions } from "./auth/[...]"
import { getServerSession } from "#auth"
import {db} from "@/server/utils/db"
import { eq, and } from "drizzle-orm"

export default defineEventHandler(async (event) => {

  const session = await getServerSession(event, authOptions)
  const body = await readBody(event)

  if (!session?.user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'You are not logged in to delete a page'
  })
  }

  const deletedPage = await db.delete(pages).where(
    and(eq(pages.id, body.pageId), eq(pages.userId, session.user.id))
  ).returning()

  if (!deletedPage) {
    throw createError({
      statusCode: 404,
      message: 'Page not found'
    })
  }
  return deletedPage
})
