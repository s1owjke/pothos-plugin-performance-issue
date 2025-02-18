import { builder } from "src/builder";

import { VortexReportCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutRealmDirectory = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutRealmDirectory] }),
    }),
  });
