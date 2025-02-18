import { builder } from "src/builder";

import { CosmicDebriCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { CosmicDebriUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelationWithoutVortexReport = builder.inputRef<any>("CosmicDebriUpdateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: CosmicDebriWhereUnique }),
    disconnect: t.field({ type: CosmicDebriWhereUnique }),
    create: t.field({ type: CosmicDebriCreateWithoutVortexReport }),
    update: t.field({ type: CosmicDebriUpdateWithoutVortexReport }),
  }),
});
