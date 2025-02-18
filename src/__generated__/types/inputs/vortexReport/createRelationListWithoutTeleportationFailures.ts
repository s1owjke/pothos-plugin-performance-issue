import { builder } from "src/builder";

import { VortexReportCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutTeleportationFailures = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutTeleportationFailures] }),
    }),
  });
