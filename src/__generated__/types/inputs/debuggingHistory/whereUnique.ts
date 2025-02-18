import { builder } from "src/builder";

export const DebuggingHistoryWhereUnique = builder.inputRef<any>("DebuggingHistoryWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
