import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutSymphonyCharts } from "./createWithoutSymphonyCharts";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureCreateRelationListWithoutSymphonyCharts = builder
  .inputRef<any>("TeleportationFailureCreateRelationListWithoutSymphonyCharts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TeleportationFailureWhereUnique] }),
      create: t.field({ type: [TeleportationFailureCreateWithoutSymphonyCharts] }),
    }),
  });
