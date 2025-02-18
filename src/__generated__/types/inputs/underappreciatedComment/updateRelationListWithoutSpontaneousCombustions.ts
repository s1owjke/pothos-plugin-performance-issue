import { builder } from "src/builder";

import { UnderappreciatedCommentCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentUpdateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("UnderappreciatedCommentUpdateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
      set: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
      disconnect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
      create: t.field({ type: [UnderappreciatedCommentCreateWithoutSpontaneousCombustions] }),
    }),
  });
