import { builder } from "src/builder";

export const BananaQueueWhereUnique = builder.inputRef<any>("BananaQueueWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
