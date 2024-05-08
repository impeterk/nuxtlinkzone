import { authOptions } from "../auth/[...]"
import { getServerSession } from "#auth"
import {db} from "@/server/utils/db"
import { eq } from "drizzle-orm"


export default defineEventHandler(async (event) => {

  const session = await getServerSession(event, authOptions)
    const body = await readBody(event)

    if (!session?.user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'You are not logged in to add new link'
        })
    }

    const userPage = await db.query.pages.findFirst({
      where: eq(pages.id, body.pageId)
    })

    if (userPage?.userId !== session.user.id) {
      throw createError({
        statusCode: 401,
        statusMessage: 'You are not authorized to add links to this page'
    })
    }

    const newLink = await db.insert(links).values({
      href: body.href,
      pageId: body.pageId,
      name: body.name,
      icon: body?.icon || null
    }).returning()

    if (!newLink) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Something went wrong'
    })
    }
  return newLink
})
