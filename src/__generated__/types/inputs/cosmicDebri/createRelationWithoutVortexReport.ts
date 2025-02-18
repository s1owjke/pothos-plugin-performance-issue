import { builder } from "src/builder";

import { CosmicDebriCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationWithoutVortexReport = builder.inputRef<any>("CosmicDebriCreateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: CosmicDebriWhereUnique }),
    create: t.field({ type: CosmicDebriCreateWithoutVortexReport }),
  }),
});
