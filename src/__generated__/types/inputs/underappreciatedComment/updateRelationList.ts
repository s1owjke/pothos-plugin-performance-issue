import { builder } from "src/builder";

import { UnderappreciatedCommentCreate } from "./create";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentUpdateRelationList = builder.inputRef<any>("UnderappreciatedCommentUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
    set: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
    disconnect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
    create: t.field({ type: [UnderappreciatedCommentCreate] }),
  }),
});
