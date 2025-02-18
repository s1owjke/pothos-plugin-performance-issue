import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureCreateRelationWithoutVortexReport = builder
  .inputRef<any>("TeleportationFailureCreateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutVortexReport }),
    }),
  });
