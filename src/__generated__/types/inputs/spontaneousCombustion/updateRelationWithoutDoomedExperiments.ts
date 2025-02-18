import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutDoomedExperiments } from "./createWithoutDoomedExperiments";
import { SpontaneousCombustionUpdateWithoutDoomedExperiments } from "./updateWithoutDoomedExperiments";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationWithoutDoomedExperiments = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      disconnect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutDoomedExperiments }),
      update: t.field({ type: SpontaneousCombustionUpdateWithoutDoomedExperiments }),
    }),
  });
