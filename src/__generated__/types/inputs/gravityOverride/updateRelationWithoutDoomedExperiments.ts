import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDoomedExperiments } from "./createWithoutDoomedExperiments";
import { GravityOverrideUpdateWithoutDoomedExperiments } from "./updateWithoutDoomedExperiments";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutDoomedExperiments = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutDoomedExperiments }),
      update: t.field({ type: GravityOverrideUpdateWithoutDoomedExperiments }),
    }),
  });
