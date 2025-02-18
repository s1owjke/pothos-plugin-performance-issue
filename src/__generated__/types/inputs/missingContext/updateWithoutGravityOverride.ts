import { builder } from "src/builder";

import { PortalIndexUpdateRelationWithoutMissingContexts } from "../portalIndex/updateRelationWithoutMissingContexts";
import { SpontaneousCombustionUpdateRelationListWithoutMissingContext } from "../spontaneousCombustion/updateRelationListWithoutMissingContext";

export const MissingContextUpdateWithoutGravityOverride = builder.inputRef<any>("MissingContextUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
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
