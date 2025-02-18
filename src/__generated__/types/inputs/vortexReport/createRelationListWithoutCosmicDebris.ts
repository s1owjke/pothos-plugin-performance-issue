import { builder } from "src/builder";

import { VortexReportCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutCosmicDebris = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutCosmicDebris] }),
    }),
  });
