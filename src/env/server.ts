/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
});
