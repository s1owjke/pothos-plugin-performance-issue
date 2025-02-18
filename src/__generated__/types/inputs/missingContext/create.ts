import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutMissingContexts } from "../gravityOverride/createRelationWithoutMissingContexts";
import { PortalIndexCreateRelationWithoutMissingContexts } from "../portalIndex/createRelationWithoutMissingContexts";
import { SpontaneousCombustionCreateRelationListWithoutMissingContext } from "../spontaneousCombustion/createRelationListWithoutMissingContext";

export const MissingContextCreate = builder.inputRef<any>("MissingContextCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutMissingContexts,
      required: true,
    }),
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
