import { builder } from "src/builder";

import { GhostRecordCreateRelationWithoutArtificialPotato } from "../ghostRecord/createRelationWithoutArtificialPotato";
import { InvisibleTransactionCreateRelationWithoutArtificialPotato } from "../invisibleTransaction/createRelationWithoutArtificialPotato";
import { OverwrittenLegacyCreateRelationListWithoutArtificialPotato } from "../overwrittenLegacy/createRelationListWithoutArtificialPotato";
import { UnstableFrequencyCreateRelationWithoutArtificialPotatoes } from "../unstableFrequency/createRelationWithoutArtificialPotatoes";

export const ArtificialPotatoCreateWithoutEchoChambers = builder.inputRef<any>("ArtificialPotatoCreateWithoutEchoChambers").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    ghostRecord: t.field({
      type: GhostRecordCreateRelationWithoutArtificialPotato,
      required: false,
    }),
    invisibleTransaction: t.field({
      type: InvisibleTransactionCreateRelationWithoutArtificialPotato,
      required: false,
    }),
    overwrittenLegacy: t.field({
      type: OverwrittenLegacyCreateRelationListWithoutArtificialPotato,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutArtificialPotatoes,
      required: false,
    }),
  }),
});
