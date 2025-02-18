import { builder } from "src/builder";

import { VortexReportCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutRealmDirectory = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutRealmDirectory] }),
    }),
  });
