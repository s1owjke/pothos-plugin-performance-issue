import { builder } from "src/builder";

import { VortexReportCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutCosmicDebris = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutCosmicDebris] }),
    }),
  });
