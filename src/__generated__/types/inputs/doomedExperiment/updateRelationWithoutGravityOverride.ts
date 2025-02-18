import { builder } from "src/builder";

import { DoomedExperimentCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { DoomedExperimentUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("DoomedExperimentUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DoomedExperimentWhereUnique }),
      disconnect: t.field({ type: DoomedExperimentWhereUnique }),
      create: t.field({ type: DoomedExperimentCreateWithoutGravityOverride }),
      update: t.field({ type: DoomedExperimentUpdateWithoutGravityOverride }),
    }),
  });
