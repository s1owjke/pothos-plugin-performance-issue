import { builder } from "src/builder";

import { OverdueRevolutionCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionUpdateRelationListWithoutPocketUniverses = builder
  .inputRef<any>("OverdueRevolutionUpdateRelationListWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverdueRevolutionWhereUnique] }),
      set: t.field({ type: [OverdueRevolutionWhereUnique] }),
      disconnect: t.field({ type: [OverdueRevolutionWhereUnique] }),
      create: t.field({ type: [OverdueRevolutionCreateWithoutPocketUniverses] }),
    }),
  });
