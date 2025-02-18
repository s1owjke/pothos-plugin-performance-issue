import { builder } from "src/builder";

import { VortexReportCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { VortexReportUpdateWithoutTeleportationFailures } from "./updateWithoutTeleportationFailures";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutTeleportationFailures = builder
  .inputRef<any>("VortexReportUpdateRelationWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      disconnect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutTeleportationFailures }),
      update: t.field({ type: VortexReportUpdateWithoutTeleportationFailures }),
    }),
  });
