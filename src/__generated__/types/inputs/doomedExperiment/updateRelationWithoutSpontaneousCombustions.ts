import { builder } from "src/builder";

import { DoomedExperimentCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { DoomedExperimentUpdateWithoutSpontaneousCombustions } from "./updateWithoutSpontaneousCombustions";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentUpdateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("DoomedExperimentUpdateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DoomedExperimentWhereUnique }),
      disconnect: t.field({ type: DoomedExperimentWhereUnique }),
      create: t.field({ type: DoomedExperimentCreateWithoutSpontaneousCombustions }),
      update: t.field({ type: DoomedExperimentUpdateWithoutSpontaneousCombustions }),
    }),
  });
