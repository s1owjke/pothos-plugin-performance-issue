import { builder } from "src/builder";

import { UnderappreciatedCommentCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { UnderappreciatedCommentUpdateWithoutSpontaneousCombustions } from "./updateWithoutSpontaneousCombustions";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentUpdateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("UnderappreciatedCommentUpdateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnderappreciatedCommentWhereUnique }),
      disconnect: t.field({ type: UnderappreciatedCommentWhereUnique }),
      create: t.field({ type: UnderappreciatedCommentCreateWithoutSpontaneousCombustions }),
      update: t.field({ type: UnderappreciatedCommentUpdateWithoutSpontaneousCombustions }),
    }),
  });
