import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutSymphonyCharts } from "./createWithoutSymphonyCharts";
import { TeleportationFailureUpdateWithoutSymphonyCharts } from "./updateWithoutSymphonyCharts";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationWithoutSymphonyCharts = builder
  .inputRef<any>("TeleportationFailureUpdateRelationWithoutSymphonyCharts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      disconnect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutSymphonyCharts }),
      update: t.field({ type: TeleportationFailureUpdateWithoutSymphonyCharts }),
    }),
  });
