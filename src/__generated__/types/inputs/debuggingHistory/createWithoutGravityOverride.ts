import { builder } from "src/builder";

export const DebuggingHistoryCreateWithoutGravityOverride = builder.inputRef<any>("DebuggingHistoryCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
