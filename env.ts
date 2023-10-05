import { z } from "zod"

export const env =  {
    ENDPOINT: z.string().url().optional(),
}
  