import { builder } from "src/builder";

import { UnderappreciatedCommentCreate } from "./create";
import { UnderappreciatedCommentUpdate } from "./update";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentUpdateRelation = builder.inputRef<any>("UnderappreciatedCommentUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnderappreciatedCommentWhereUnique }),
    disconnect: t.field({ type: UnderappreciatedCommentWhereUnique }),
    create: t.field({ type: UnderappreciatedCommentCreate }),
    update: t.field({ type: UnderappreciatedCommentUpdate }),
  }),
});
