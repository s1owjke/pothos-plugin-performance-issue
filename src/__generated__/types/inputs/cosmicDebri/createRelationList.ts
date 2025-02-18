import { builder } from "src/builder";

import { CosmicDebriCreate } from "./create";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationList = builder.inputRef<any>("CosmicDebriCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [CosmicDebriWhereUnique] }),
    create: t.field({ type: [CosmicDebriCreate] }),
  }),
});
