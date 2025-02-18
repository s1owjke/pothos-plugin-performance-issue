import { builder } from "src/builder";

import { UnderappreciatedCommentWhere } from "./where";

export const UnderappreciatedCommentWhereRelationList = builder.inputRef<any>("UnderappreciatedCommentWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: UnderappreciatedCommentWhere, required: false }),
    every: t.field({ type: UnderappreciatedCommentWhere, required: false }),
    none: t.field({ type: UnderappreciatedCommentWhere, required: false }),
  }),
});
