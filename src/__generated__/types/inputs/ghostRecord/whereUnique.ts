import { builder } from "src/builder";

export const GhostRecordWhereUnique = builder.inputRef<any>("GhostRecordWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
