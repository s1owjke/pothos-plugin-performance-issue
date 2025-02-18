import { builder } from "src/builder";

import { CosmicDebriCreate } from "./create";
import { CosmicDebriUpdate } from "./update";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelation = builder.inputRef<any>("CosmicDebriUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: CosmicDebriWhereUnique }),
    disconnect: t.field({ type: CosmicDebriWhereUnique }),
    create: t.field({ type: CosmicDebriCreate }),
    update: t.field({ type: CosmicDebriUpdate }),
  }),
});
