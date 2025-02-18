import { builder } from "src/builder";

export const UnstableFrequencyWhereUnique = builder.inputRef<any>("UnstableFrequencyWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
