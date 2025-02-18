import { builder } from "src/builder";

import { VortexReportCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { VortexReportUpdateWithoutConspiracyDrafts } from "./updateWithoutConspiracyDrafts";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutConspiracyDrafts = builder
  .inputRef<any>("VortexReportUpdateRelationWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      disconnect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutConspiracyDrafts }),
      update: t.field({ type: VortexReportUpdateWithoutConspiracyDrafts }),
    }),
  });
