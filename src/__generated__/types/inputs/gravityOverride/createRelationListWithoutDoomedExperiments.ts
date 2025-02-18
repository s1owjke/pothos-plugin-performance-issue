import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDoomedExperiments } from "./createWithoutDoomedExperiments";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutDoomedExperiments = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutDoomedExperiments] }),
    }),
  });
