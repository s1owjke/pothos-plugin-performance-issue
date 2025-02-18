import { builder } from "src/builder";

import { VortexReportCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutInfiniteUndo = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutInfiniteUndo] }),
    }),
  });
