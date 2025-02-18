import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutMissingContexts } from "../gravityOverride/updateRelationWithoutMissingContexts";
import { SpontaneousCombustionUpdateRelationListWithoutMissingContext } from "../spontaneousCombustion/updateRelationListWithoutMissingContext";

export const MissingContextUpdateWithoutPortalIndex = builder.inputRef<any>("MissingContextUpdateWithoutPortalIndex").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutMissingContexts,
      required: false,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionUpdateRelationListWithoutMissingContext,
      required: false,
    }),
  }),
});
