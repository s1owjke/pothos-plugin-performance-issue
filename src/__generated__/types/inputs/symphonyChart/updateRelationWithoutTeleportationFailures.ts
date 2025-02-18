import { builder } from "src/builder";

import { SymphonyChartCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { SymphonyChartUpdateWithoutTeleportationFailures } from "./updateWithoutTeleportationFailures";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutTeleportationFailures = builder
  .inputRef<any>("SymphonyChartUpdateRelationWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      disconnect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutTeleportationFailures }),
      update: t.field({ type: SymphonyChartUpdateWithoutTeleportationFailures }),
    }),
  });
