import { builder } from "src/builder";

import { CosmicDebriCreate } from "./create";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelation = builder.inputRef<any>("CosmicDebriCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: CosmicDebriWhereUnique }),
    create: t.field({ type: CosmicDebriCreate }),
  }),
});
