import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutUnderappreciatedComments } from "../gravityOverride/updateRelationWithoutUnderappreciatedComments";
import { SpontaneousCombustionUpdateRelationListWithoutUnderappreciatedComments } from "../spontaneousCombustion/updateRelationListWithoutUnderappreciatedComments";

export const UnderappreciatedCommentUpdate = builder.inputRef<any>("UnderappreciatedCommentUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutUnderappreciatedComments,
      required: false,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionUpdateRelationListWithoutUnderappreciatedComments,
      required: false,
    }),
  }),
});
