import { builder } from "src/builder";

import { DoomedExperimentCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentCreateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("DoomedExperimentCreateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DoomedExperimentWhereUnique }),
      create: t.field({ type: DoomedExperimentCreateWithoutSpontaneousCombustions }),
    }),
  });
