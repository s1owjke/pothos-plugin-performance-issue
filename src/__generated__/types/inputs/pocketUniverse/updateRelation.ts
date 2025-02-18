import { builder } from "src/builder";

import { PocketUniverseCreate } from "./create";
import { PocketUniverseUpdate } from "./update";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseUpdateRelation = builder.inputRef<any>("PocketUniverseUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: PocketUniverseWhereUnique }),
    disconnect: t.field({ type: PocketUniverseWhereUnique }),
    create: t.field({ type: PocketUniverseCreate }),
    update: t.field({ type: PocketUniverseUpdate }),
  }),
});
