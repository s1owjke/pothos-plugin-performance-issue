import { builder } from "src/builder";

export const StaticWhisperWhereUnique = builder.inputRef<any>("StaticWhisperWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
