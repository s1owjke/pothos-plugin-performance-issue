import { builder } from "src/builder";

import { SpontaneousCombustionCreateRelationListWithoutUnderappreciatedComments } from "../spontaneousCombustion/createRelationListWithoutUnderappreciatedComments";

export const UnderappreciatedCommentCreateWithoutGravityOverride = builder
  .inputRef<any>("UnderappreciatedCommentCreateWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      spontaneousCombustions: t.field({
        type: SpontaneousCombustionCreateRelationListWithoutUnderappreciatedComments,
        required: false,
      }),
    }),
  });
