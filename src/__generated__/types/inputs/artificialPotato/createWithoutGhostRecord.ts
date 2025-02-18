import { builder } from "src/builder";

import { EchoChamberCreateRelationListWithoutVerifier } from "../echoChamber/createRelationListWithoutVerifier";
import { InvisibleTransactionCreateRelationWithoutArtificialPotato } from "../invisibleTransaction/createRelationWithoutArtificialPotato";
import { OverwrittenLegacyCreateRelationListWithoutArtificialPotato } from "../overwrittenLegacy/createRelationListWithoutArtificialPotato";
import { UnstableFrequencyCreateRelationWithoutArtificialPotatoes } from "../unstableFrequency/createRelationWithoutArtificialPotatoes";

export const ArtificialPotatoCreateWithoutGhostRecord = builder.inputRef<any>("ArtificialPotatoCreateWithoutGhostRecord").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    echoChambers: t.field({
      type: EchoChamberCreateRelationListWithoutVerifier,
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
