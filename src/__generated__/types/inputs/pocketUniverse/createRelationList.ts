import { builder } from "src/builder";

import { PocketUniverseCreate } from "./create";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseCreateRelationList = builder.inputRef<any>("PocketUniverseCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [PocketUniverseWhereUnique] }),
    create: t.field({ type: [PocketUniverseCreate] }),
  }),
});
