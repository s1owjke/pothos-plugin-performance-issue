import { builder } from "src/builder";

import { OverdueRevolutionCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionCreateRelationWithoutPocketUniverses = builder
  .inputRef<any>("OverdueRevolutionCreateRelationWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverdueRevolutionWhereUnique }),
      create: t.field({ type: OverdueRevolutionCreateWithoutPocketUniverses }),
    }),
  });
