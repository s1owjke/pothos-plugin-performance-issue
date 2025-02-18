import { builder } from "src/builder";

import { DoomedExperimentCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentUpdateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("DoomedExperimentUpdateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DoomedExperimentWhereUnique] }),
      set: t.field({ type: [DoomedExperimentWhereUnique] }),
      disconnect: t.field({ type: [DoomedExperimentWhereUnique] }),
      create: t.field({ type: [DoomedExperimentCreateWithoutSpontaneousCombustions] }),
    }),
  });
