import { builder } from "src/builder";

import { SpontaneousCombustionUpdateRelationListWithoutUnderappreciatedComments } from "../spontaneousCombustion/updateRelationListWithoutUnderappreciatedComments";

export const UnderappreciatedCommentUpdateWithoutGravityOverride = builder
  .inputRef<any>("UnderappreciatedCommentUpdateWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      spontaneousCombustions: t.field({
        type: SpontaneousCombustionUpdateRelationListWithoutUnderappreciatedComments,
        required: false,
      }),
    }),
  });
