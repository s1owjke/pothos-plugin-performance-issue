import { builder } from "src/builder";

import { VortexReportCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { VortexReportUpdateWithoutInfiniteUndo } from "./updateWithoutInfiniteUndo";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutInfiniteUndo = builder.inputRef<any>("VortexReportUpdateRelationWithoutInfiniteUndo").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    disconnect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutInfiniteUndo }),
    update: t.field({ type: VortexReportUpdateWithoutInfiniteUndo }),
  }),
});
