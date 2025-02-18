import { builder } from "src/builder";

export const PendingDisasterWhereUnique = builder.inputRef<any>("PendingDisasterWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
