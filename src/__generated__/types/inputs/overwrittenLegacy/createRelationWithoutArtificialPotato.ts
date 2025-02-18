import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyCreateRelationWithoutArtificialPotato = builder
  .inputRef<any>("OverwrittenLegacyCreateRelationWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverwrittenLegacyWhereUnique }),
      create: t.field({ type: OverwrittenLegacyCreateWithoutArtificialPotato }),
    }),
  });
