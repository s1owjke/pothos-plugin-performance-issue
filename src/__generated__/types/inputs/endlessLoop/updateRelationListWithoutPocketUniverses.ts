import { builder } from "src/builder";

import { EndlessLoopCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopUpdateRelationListWithoutPocketUniverses = builder
  .inputRef<any>("EndlessLoopUpdateRelationListWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EndlessLoopWhereUnique] }),
      set: t.field({ type: [EndlessLoopWhereUnique] }),
      disconnect: t.field({ type: [EndlessLoopWhereUnique] }),
      create: t.field({ type: [EndlessLoopCreateWithoutPocketUniverses] }),
    }),
  });
