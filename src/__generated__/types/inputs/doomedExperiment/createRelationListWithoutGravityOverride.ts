import { builder } from "src/builder";

import { DoomedExperimentCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("DoomedExperimentCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DoomedExperimentWhereUnique] }),
      create: t.field({ type: [DoomedExperimentCreateWithoutGravityOverride] }),
    }),
  });
