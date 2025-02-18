import { builder } from "src/builder";

import { PocketUniverseCreate } from "./create";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseUpdateRelationList = builder.inputRef<any>("PocketUniverseUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [PocketUniverseWhereUnique] }),
    set: t.field({ type: [PocketUniverseWhereUnique] }),
    disconnect: t.field({ type: [PocketUniverseWhereUnique] }),
    create: t.field({ type: [PocketUniverseCreate] }),
  }),
});
