import { builder } from "src/builder";

import { VortexReportCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutCosmicDebris = builder.inputRef<any>("VortexReportCreateRelationWithoutCosmicDebris").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutCosmicDebris }),
  }),
});
