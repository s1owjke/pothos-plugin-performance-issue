import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutMissingContexts } from "../gravityOverride/createRelationWithoutMissingContexts";
import { SpontaneousCombustionCreateRelationListWithoutMissingContext } from "../spontaneousCombustion/createRelationListWithoutMissingContext";

export const MissingContextCreateWithoutPortalIndex = builder.inputRef<any>("MissingContextCreateWithoutPortalIndex").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutMissingContexts,
      required: true,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionCreateRelationListWithoutMissingContext,
      required: false,
    }),
  }),
});
