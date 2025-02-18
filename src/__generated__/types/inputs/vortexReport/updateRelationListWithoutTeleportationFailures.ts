import { builder } from "src/builder";

import { VortexReportCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutTeleportationFailures = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutTeleportationFailures] }),
    }),
  });
