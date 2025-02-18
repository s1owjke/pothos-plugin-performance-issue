import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutSymphonyCharts } from "./createWithoutSymphonyCharts";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationListWithoutSymphonyCharts = builder
  .inputRef<any>("TeleportationFailureUpdateRelationListWithoutSymphonyCharts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TeleportationFailureWhereUnique] }),
      set: t.field({ type: [TeleportationFailureWhereUnique] }),
      disconnect: t.field({ type: [TeleportationFailureWhereUnique] }),
      create: t.field({ type: [TeleportationFailureCreateWithoutSymphonyCharts] }),
    }),
  });
