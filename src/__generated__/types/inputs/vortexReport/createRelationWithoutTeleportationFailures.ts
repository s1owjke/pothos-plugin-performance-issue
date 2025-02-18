import { builder } from "src/builder";

import { VortexReportCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutTeleportationFailures = builder
  .inputRef<any>("VortexReportCreateRelationWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutTeleportationFailures }),
    }),
  });
