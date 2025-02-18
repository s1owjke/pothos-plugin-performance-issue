import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutUnderappreciatedComments } from "../gravityOverride/createRelationWithoutUnderappreciatedComments";
import { SpontaneousCombustionCreateRelationListWithoutUnderappreciatedComments } from "../spontaneousCombustion/createRelationListWithoutUnderappreciatedComments";

export const UnderappreciatedCommentCreate = builder.inputRef<any>("UnderappreciatedCommentCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutUnderappreciatedComments,
      required: true,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionCreateRelationListWithoutUnderappreciatedComments,
      required: false,
    }),
  }),
});
