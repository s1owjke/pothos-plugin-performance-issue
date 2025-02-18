import { builder } from "src/builder";

import { UnderappreciatedCommentCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("UnderappreciatedCommentUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
      set: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
      disconnect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
      create: t.field({ type: [UnderappreciatedCommentCreateWithoutGravityOverride] }),
    }),
  });
