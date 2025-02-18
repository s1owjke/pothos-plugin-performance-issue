import { builder } from "src/builder";

export const DebuggingHistoryUpdateWithoutGravityOverride = builder.inputRef<any>("DebuggingHistoryUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
  }),
});
