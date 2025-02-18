import { builder } from "src/builder";

import { OverdueRevolutionCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionCreateRelationListWithoutPocketUniverses = builder
  .inputRef<any>("OverdueRevolutionCreateRelationListWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverdueRevolutionWhereUnique] }),
      create: t.field({ type: [OverdueRevolutionCreateWithoutPocketUniverses] }),
    }),
  });
