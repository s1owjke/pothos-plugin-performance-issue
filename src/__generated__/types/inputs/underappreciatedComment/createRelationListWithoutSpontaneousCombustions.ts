import { builder } from "src/builder";

import { UnderappreciatedCommentCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentCreateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("UnderappreciatedCommentCreateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
      create: t.field({ type: [UnderappreciatedCommentCreateWithoutSpontaneousCombustions] }),
    }),
  });
