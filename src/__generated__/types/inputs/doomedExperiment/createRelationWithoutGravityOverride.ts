import { builder } from "src/builder";

import { DoomedExperimentCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("DoomedExperimentCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DoomedExperimentWhereUnique }),
      create: t.field({ type: DoomedExperimentCreateWithoutGravityOverride }),
    }),
  });
