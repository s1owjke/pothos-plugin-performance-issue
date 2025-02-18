import { builder } from "src/builder";

import { UnderappreciatedCommentCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("UnderappreciatedCommentCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnderappreciatedCommentWhereUnique }),
      create: t.field({ type: UnderappreciatedCommentCreateWithoutGravityOverride }),
    }),
  });
