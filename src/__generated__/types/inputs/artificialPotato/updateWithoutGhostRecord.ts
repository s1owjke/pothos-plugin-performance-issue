import { builder } from "src/builder";

import { EchoChamberUpdateRelationListWithoutVerifier } from "../echoChamber/updateRelationListWithoutVerifier";
import { InvisibleTransactionUpdateRelationWithoutArtificialPotato } from "../invisibleTransaction/updateRelationWithoutArtificialPotato";
import { OverwrittenLegacyUpdateRelationListWithoutArtificialPotato } from "../overwrittenLegacy/updateRelationListWithoutArtificialPotato";
import { UnstableFrequencyUpdateRelationWithoutArtificialPotatoes } from "../unstableFrequency/updateRelationWithoutArtificialPotatoes";

export const ArtificialPotatoUpdateWithoutGhostRecord = builder.inputRef<any>("ArtificialPotatoUpdateWithoutGhostRecord").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    echoChambers: t.field({
      type: EchoChamberUpdateRelationListWithoutVerifier,
      required: false,
    }),
    invisibleTransaction: t.field({
      type: InvisibleTransactionUpdateRelationWithoutArtificialPotato,
      required: false,
    }),
    overwrittenLegacy: t.field({
      type: OverwrittenLegacyUpdateRelationListWithoutArtificialPotato,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutArtificialPotatoes,
      required: false,
    }),
  }),
});
