import { builder } from "src/builder";

import { EndlessLoopCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopCreateRelationListWithoutPocketUniverses = builder
  .inputRef<any>("EndlessLoopCreateRelationListWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EndlessLoopWhereUnique] }),
      create: t.field({ type: [EndlessLoopCreateWithoutPocketUniverses] }),
    }),
  });
