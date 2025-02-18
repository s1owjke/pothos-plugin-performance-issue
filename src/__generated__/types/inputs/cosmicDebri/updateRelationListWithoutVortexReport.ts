import { builder } from "src/builder";

import { CosmicDebriCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelationListWithoutVortexReport = builder.inputRef<any>("CosmicDebriUpdateRelationListWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: [CosmicDebriWhereUnique] }),
    set: t.field({ type: [CosmicDebriWhereUnique] }),
    disconnect: t.field({ type: [CosmicDebriWhereUnique] }),
    create: t.field({ type: [CosmicDebriCreateWithoutVortexReport] }),
  }),
});
