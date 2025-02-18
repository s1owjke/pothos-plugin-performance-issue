import { builder } from "src/builder";

export const UnderappreciatedCommentWhereUnique = builder.inputRef<any>("UnderappreciatedCommentWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
