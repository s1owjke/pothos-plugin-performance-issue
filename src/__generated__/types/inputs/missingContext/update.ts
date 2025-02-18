import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutMissingContexts } from "../gravityOverride/updateRelationWithoutMissingContexts";
import { PortalIndexUpdateRelationWithoutMissingContexts } from "../portalIndex/updateRelationWithoutMissingContexts";
import { SpontaneousCombustionUpdateRelationListWithoutMissingContext } from "../spontaneousCombustion/updateRelationListWithoutMissingContext";

export const MissingContextUpdate = builder.inputRef<any>("MissingContextUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutMissingContexts,
      required: false,
    }),
    portalIndex: t.field({
      type: PortalIndexUpdateRelationWithoutMissingContexts,
      required: false,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionUpdateRelationListWithoutMissingContext,
      required: false,
    }),
  }),
});
