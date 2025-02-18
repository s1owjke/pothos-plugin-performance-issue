import { builder } from "src/builder";

import { SymphonyChartCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutTeleportationFailures = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutTeleportationFailures] }),
    }),
  });
