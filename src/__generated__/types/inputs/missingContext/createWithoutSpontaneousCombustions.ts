import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutMissingContexts } from "../gravityOverride/createRelationWithoutMissingContexts";
import { PortalIndexCreateRelationWithoutMissingContexts } from "../portalIndex/createRelationWithoutMissingContexts";

export const MissingContextCreateWithoutSpontaneousCombustions = builder
  .inputRef<any>("MissingContextCreateWithoutSpontaneousCombustions")
  .implement({
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
    }),
  });
