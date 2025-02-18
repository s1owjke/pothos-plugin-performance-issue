import { builder } from "src/builder";

import { DoomedExperimentCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("DoomedExperimentUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DoomedExperimentWhereUnique] }),
      set: t.field({ type: [DoomedExperimentWhereUnique] }),
      disconnect: t.field({ type: [DoomedExperimentWhereUnique] }),
      create: t.field({ type: [DoomedExperimentCreateWithoutGravityOverride] }),
    }),
  });
