import { builder } from "src/builder";

export const EndlessLoopWhereUnique = builder.inputRef<any>("EndlessLoopWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
