import { builder } from "src/builder";

import { CosmicDebriCreate } from "./create";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelationList = builder.inputRef<any>("CosmicDebriUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [CosmicDebriWhereUnique] }),
    set: t.field({ type: [CosmicDebriWhereUnique] }),
    disconnect: t.field({ type: [CosmicDebriWhereUnique] }),
    create: t.field({ type: [CosmicDebriCreate] }),
  }),
});
