import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDoomedExperiments } from "./createWithoutDoomedExperiments";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutDoomedExperiments = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutDoomedExperiments }),
    }),
  });
