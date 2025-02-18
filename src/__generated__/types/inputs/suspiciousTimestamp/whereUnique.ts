import { builder } from "src/builder";

export const SuspiciousTimestampWhereUnique = builder.inputRef<any>("SuspiciousTimestampWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
