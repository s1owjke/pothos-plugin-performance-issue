import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDoomedExperiments } from "./createWithoutDoomedExperiments";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutDoomedExperiments = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutDoomedExperiments] }),
    }),
  });
