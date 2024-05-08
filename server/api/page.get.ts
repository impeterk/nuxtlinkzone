import {db} from "@/server/utils/db"
import { eq } from "drizzle-orm"

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    if (!query) {
     throw createError({
        statusCode: 500,
        statusMessage: 'pageId query not found'
     })
    }
  
    return await db.query.pages.findFirst({
        where: eq(pages.id!, String(query.id)),
        with: {
            links: true
        }
    })
  })
  