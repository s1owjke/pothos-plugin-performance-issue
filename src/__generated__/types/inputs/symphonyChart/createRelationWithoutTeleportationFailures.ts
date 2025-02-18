import { builder } from "src/builder";

import { SymphonyChartCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutTeleportationFailures = builder
  .inputRef<any>("SymphonyChartCreateRelationWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutTeleportationFailures }),
    }),
  });
