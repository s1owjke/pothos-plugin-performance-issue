import { builder } from "src/builder";

import { PortalIndexCreateRelationWithoutMissingContexts } from "../portalIndex/createRelationWithoutMissingContexts";
import { SpontaneousCombustionCreateRelationListWithoutMissingContext } from "../spontaneousCombustion/createRelationListWithoutMissingContext";

export const MissingContextCreateWithoutGravityOverride = builder.inputRef<any>("MissingContextCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    portalIndex: t.field({
      type: PortalIndexCreateRelationWithoutMissingContexts,
      required: false,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionCreateRelationListWithoutMissingContext,
      required: false,
    }),
  }),
});
