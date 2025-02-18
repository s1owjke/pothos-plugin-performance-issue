import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutMissingContexts } from "../gravityOverride/updateRelationWithoutMissingContexts";
import { PortalIndexUpdateRelationWithoutMissingContexts } from "../portalIndex/updateRelationWithoutMissingContexts";

export const MissingContextUpdateWithoutSpontaneousCombustions = builder
  .inputRef<any>("MissingContextUpdateWithoutSpontaneousCombustions")
  .implement({
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
    }),
  });
