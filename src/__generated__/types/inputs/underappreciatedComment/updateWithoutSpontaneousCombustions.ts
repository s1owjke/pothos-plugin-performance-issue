import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutUnderappreciatedComments } from "../gravityOverride/updateRelationWithoutUnderappreciatedComments";

export const UnderappreciatedCommentUpdateWithoutSpontaneousCombustions = builder
  .inputRef<any>("UnderappreciatedCommentUpdateWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      gravityOverride: t.field({
        type: GravityOverrideUpdateRelationWithoutUnderappreciatedComments,
        required: false,
      }),
    }),
  });
