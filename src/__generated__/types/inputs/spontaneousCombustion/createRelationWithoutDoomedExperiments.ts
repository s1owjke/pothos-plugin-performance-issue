import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutDoomedExperiments } from "./createWithoutDoomedExperiments";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationWithoutDoomedExperiments = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutDoomedExperiments }),
    }),
  });
