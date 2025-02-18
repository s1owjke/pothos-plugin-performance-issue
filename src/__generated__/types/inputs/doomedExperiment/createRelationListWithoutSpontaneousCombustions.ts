import { builder } from "src/builder";

import { DoomedExperimentCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentCreateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("DoomedExperimentCreateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DoomedExperimentWhereUnique] }),
      create: t.field({ type: [DoomedExperimentCreateWithoutSpontaneousCombustions] }),
    }),
  });
