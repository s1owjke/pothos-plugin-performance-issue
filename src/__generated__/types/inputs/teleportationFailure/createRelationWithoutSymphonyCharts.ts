import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutSymphonyCharts } from "./createWithoutSymphonyCharts";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureCreateRelationWithoutSymphonyCharts = builder
  .inputRef<any>("TeleportationFailureCreateRelationWithoutSymphonyCharts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutSymphonyCharts }),
    }),
  });
