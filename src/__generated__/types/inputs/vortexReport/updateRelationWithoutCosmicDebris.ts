import { builder } from "src/builder";

import { VortexReportCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { VortexReportUpdateWithoutCosmicDebris } from "./updateWithoutCosmicDebris";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutCosmicDebris = builder.inputRef<any>("VortexReportUpdateRelationWithoutCosmicDebris").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    disconnect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutCosmicDebris }),
    update: t.field({ type: VortexReportUpdateWithoutCosmicDebris }),
  }),
});
