import { builder } from "src/builder";

import { VortexReportCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutInfiniteUndo = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutInfiniteUndo] }),
    }),
  });
