import { authOptions } from "./auth/[...]"
import { getServerSession } from "#auth"
import {db} from "@/server/utils/db"

export default defineEventHandler(async (event) => {

    const session = await getServerSession(event, authOptions)
    const body = await readBody(event)
    console.log({session, body})

    if (!session?.user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'You are not logged in to create new page'
        })
    }

    return await db.insert(pages).values({
        id: body.pageId,
        userId: session.user.id
    }).returning()
})