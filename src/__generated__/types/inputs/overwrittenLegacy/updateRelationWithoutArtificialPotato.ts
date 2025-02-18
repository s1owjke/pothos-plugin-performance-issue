import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { OverwrittenLegacyUpdateWithoutArtificialPotato } from "./updateWithoutArtificialPotato";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyUpdateRelationWithoutArtificialPotato = builder
  .inputRef<any>("OverwrittenLegacyUpdateRelationWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverwrittenLegacyWhereUnique }),
      disconnect: t.field({ type: OverwrittenLegacyWhereUnique }),
      create: t.field({ type: OverwrittenLegacyCreateWithoutArtificialPotato }),
      update: t.field({ type: OverwrittenLegacyUpdateWithoutArtificialPotato }),
    }),
  });
