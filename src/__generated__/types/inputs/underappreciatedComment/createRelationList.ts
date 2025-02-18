import { builder } from "src/builder";

import { UnderappreciatedCommentCreate } from "./create";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentCreateRelationList = builder.inputRef<any>("UnderappreciatedCommentCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
    create: t.field({ type: [UnderappreciatedCommentCreate] }),
  }),
});
