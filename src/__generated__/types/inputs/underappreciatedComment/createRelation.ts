import { builder } from "src/builder";

import { UnderappreciatedCommentCreate } from "./create";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentCreateRelation = builder.inputRef<any>("UnderappreciatedCommentCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnderappreciatedCommentWhereUnique }),
    create: t.field({ type: UnderappreciatedCommentCreate }),
  }),
});
