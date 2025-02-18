import { builder } from "src/builder";

import { PocketUniverseCreateWithoutEndlessLoops } from "./createWithoutEndlessLoops";
import { PocketUniverseUpdateWithoutEndlessLoops } from "./updateWithoutEndlessLoops";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseUpdateRelationWithoutEndlessLoops = builder.inputRef<any>("PocketUniverseUpdateRelationWithoutEndlessLoops").implement({
  fields: (t) => ({
    connect: t.field({ type: PocketUniverseWhereUnique }),
    disconnect: t.field({ type: PocketUniverseWhereUnique }),
    create: t.field({ type: PocketUniverseCreateWithoutEndlessLoops }),
    update: t.field({ type: PocketUniverseUpdateWithoutEndlessLoops }),
  }),
});
