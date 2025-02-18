import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutUnderappreciatedComments } from "../gravityOverride/createRelationWithoutUnderappreciatedComments";

export const UnderappreciatedCommentCreateWithoutSpontaneousCombustions = builder
  .inputRef<any>("UnderappreciatedCommentCreateWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      gravityOverride: t.field({
        type: GravityOverrideCreateRelationWithoutUnderappreciatedComments,
        required: true,
      }),
    }),
  });
