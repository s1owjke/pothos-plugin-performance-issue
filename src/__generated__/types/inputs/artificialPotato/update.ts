import { builder } from "src/builder";

import { EchoChamberUpdateRelationListWithoutVerifier } from "../echoChamber/updateRelationListWithoutVerifier";
import { GhostRecordUpdateRelationWithoutArtificialPotato } from "../ghostRecord/updateRelationWithoutArtificialPotato";
import { InvisibleTransactionUpdateRelationWithoutArtificialPotato } from "../invisibleTransaction/updateRelationWithoutArtificialPotato";
import { OverwrittenLegacyUpdateRelationListWithoutArtificialPotato } from "../overwrittenLegacy/updateRelationListWithoutArtificialPotato";
import { UnstableFrequencyUpdateRelationWithoutArtificialPotatoes } from "../unstableFrequency/updateRelationWithoutArtificialPotatoes";

export const ArtificialPotatoUpdate = builder.inputRef<any>("ArtificialPotatoUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    echoChambers: t.field({ type: EchoChamberUpdateRelationListWithoutVerifier, required: false }),
    ghostRecord: t.field({
      type: GhostRecordUpdateRelationWithoutArtificialPotato,
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
