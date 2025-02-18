import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("TeleportationFailureUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TeleportationFailureWhereUnique] }),
      set: t.field({ type: [TeleportationFailureWhereUnique] }),
      disconnect: t.field({ type: [TeleportationFailureWhereUnique] }),
      create: t.field({ type: [TeleportationFailureCreateWithoutVortexReport] }),
    }),
  });
