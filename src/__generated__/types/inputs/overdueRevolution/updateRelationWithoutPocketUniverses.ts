import { builder } from "src/builder";

import { OverdueRevolutionCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { OverdueRevolutionUpdateWithoutPocketUniverses } from "./updateWithoutPocketUniverses";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionUpdateRelationWithoutPocketUniverses = builder
  .inputRef<any>("OverdueRevolutionUpdateRelationWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverdueRevolutionWhereUnique }),
      disconnect: t.field({ type: OverdueRevolutionWhereUnique }),
      create: t.field({ type: OverdueRevolutionCreateWithoutPocketUniverses }),
      update: t.field({ type: OverdueRevolutionUpdateWithoutPocketUniverses }),
    }),
  });
