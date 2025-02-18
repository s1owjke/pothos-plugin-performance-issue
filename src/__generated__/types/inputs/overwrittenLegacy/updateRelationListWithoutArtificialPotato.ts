import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyUpdateRelationListWithoutArtificialPotato = builder
  .inputRef<any>("OverwrittenLegacyUpdateRelationListWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      set: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      disconnect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      create: t.field({ type: [OverwrittenLegacyCreateWithoutArtificialPotato] }),
    }),
  });
