import { builder } from "src/builder";

import { UnderappreciatedCommentCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { UnderappreciatedCommentWhereUnique } from "./whereUnique";

export const UnderappreciatedCommentCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("UnderappreciatedCommentCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnderappreciatedCommentWhereUnique] }),
      create: t.field({ type: [UnderappreciatedCommentCreateWithoutGravityOverride] }),
    }),
  });
