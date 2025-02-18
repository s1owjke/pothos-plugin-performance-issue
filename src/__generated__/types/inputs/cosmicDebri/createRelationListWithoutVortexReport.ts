import { builder } from "src/builder";

import { CosmicDebriCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationListWithoutVortexReport = builder.inputRef<any>("CosmicDebriCreateRelationListWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: [CosmicDebriWhereUnique] }),
    create: t.field({ type: [CosmicDebriCreateWithoutVortexReport] }),
  }),
});
