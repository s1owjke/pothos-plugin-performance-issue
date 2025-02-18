import { builder } from "src/builder";

import { VortexReportCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutConspiracyDrafts = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutConspiracyDrafts] }),
    }),
  });
