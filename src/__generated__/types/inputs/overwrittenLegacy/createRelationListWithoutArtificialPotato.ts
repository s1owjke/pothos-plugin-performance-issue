import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyCreateRelationListWithoutArtificialPotato = builder
  .inputRef<any>("OverwrittenLegacyCreateRelationListWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      create: t.field({ type: [OverwrittenLegacyCreateWithoutArtificialPotato] }),
    }),
  });
