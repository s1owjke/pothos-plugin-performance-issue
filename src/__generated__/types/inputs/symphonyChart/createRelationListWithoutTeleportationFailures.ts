import { builder } from "src/builder";

import { SymphonyChartCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationListWithoutTeleportationFailures = builder
  .inputRef<any>("SymphonyChartCreateRelationListWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutTeleportationFailures] }),
    }),
  });
