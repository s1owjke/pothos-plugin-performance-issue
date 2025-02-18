import { builder } from "src/builder";

import { VortexReportCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutConspiracyDrafts = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutConspiracyDrafts] }),
    }),
  });
