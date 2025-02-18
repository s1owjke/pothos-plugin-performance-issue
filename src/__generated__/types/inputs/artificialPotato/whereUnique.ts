import { builder } from "src/builder";

export const ArtificialPotatoWhereUnique = builder.inputRef<any>("ArtificialPotatoWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    ghostRecordId: t.field({ type: "ID", required: false }),
  }),
});
