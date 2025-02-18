import { builder } from "src/builder";

import { UnderappreciatedCommentCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { UnderappreciatedCommentUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("UnderappreciatedCommentUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnderappreciatedCommentWhereUnique }),
      disconnect: t.field({ type: UnderappreciatedCommentWhereUnique }),
      create: t.field({ type: UnderappreciatedCommentCreateWithoutGravityOverride }),
      update: t.field({ type: UnderappreciatedCommentUpdateWithoutGravityOverride }),
    }),
  });
