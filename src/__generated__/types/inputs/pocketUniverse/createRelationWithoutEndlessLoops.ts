import { builder } from "src/builder";

import { PocketUniverseCreateWithoutEndlessLoops } from "./createWithoutEndlessLoops";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseCreateRelationWithoutEndlessLoops = builder.inputRef<any>("PocketUniverseCreateRelationWithoutEndlessLoops").implement({
  fields: (t) => ({
    connect: t.field({ type: PocketUniverseWhereUnique }),
    create: t.field({ type: PocketUniverseCreateWithoutEndlessLoops }),
  }),
});
