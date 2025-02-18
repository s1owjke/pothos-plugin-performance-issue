import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutDoomedExperiments } from "./createWithoutDoomedExperiments";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationListWithoutDoomedExperiments = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationListWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutDoomedExperiments] }),
    }),
  });
