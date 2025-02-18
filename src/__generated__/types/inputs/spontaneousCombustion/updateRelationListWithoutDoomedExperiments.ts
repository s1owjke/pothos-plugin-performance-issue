import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutDoomedExperiments } from "./createWithoutDoomedExperiments";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationListWithoutDoomedExperiments = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationListWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      set: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      disconnect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutDoomedExperiments] }),
    }),
  });
