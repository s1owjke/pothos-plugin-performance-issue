import { builder } from "src/builder";

import { PocketUniverseCreate } from "./create";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseCreateRelation = builder.inputRef<any>("PocketUniverseCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: PocketUniverseWhereUnique }),
    create: t.field({ type: PocketUniverseCreate }),
  }),
});
