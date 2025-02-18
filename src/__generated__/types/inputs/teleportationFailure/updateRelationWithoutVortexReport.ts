import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { TeleportationFailureUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationWithoutVortexReport = builder
  .inputRef<any>("TeleportationFailureUpdateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      disconnect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutVortexReport }),
      update: t.field({ type: TeleportationFailureUpdateWithoutVortexReport }),
    }),
  });
