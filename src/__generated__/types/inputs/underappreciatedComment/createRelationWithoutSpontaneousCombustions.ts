import { builder } from "src/builder";

import { UnderappreciatedCommentCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentCreateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("UnderappreciatedCommentCreateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnderappreciatedCommentWhereUnique }),
      create: t.field({ type: UnderappreciatedCommentCreateWithoutSpontaneousCombustions }),
    }),
  });
