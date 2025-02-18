import { builder } from "src/builder";

export const SuspiciousTimestampCreateMany = builder.inputRef<any>("SuspiciousTimestampCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
