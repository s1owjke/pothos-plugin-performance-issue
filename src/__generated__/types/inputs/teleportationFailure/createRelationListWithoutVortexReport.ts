import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureCreateRelationListWithoutVortexReport = builder
  .inputRef<any>("TeleportationFailureCreateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TeleportationFailureWhereUnique] }),
      create: t.field({ type: [TeleportationFailureCreateWithoutVortexReport] }),
    }),
  });
