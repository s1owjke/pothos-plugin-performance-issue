import { builder } from "src/builder";

import { EchoChamberUpdateRelationListWithoutVerifier } from "../echoChamber/updateRelationListWithoutVerifier";
import { GhostRecordUpdateRelationWithoutArtificialPotato } from "../ghostRecord/updateRelationWithoutArtificialPotato";
import { OverwrittenLegacyUpdateRelationListWithoutArtificialPotato } from "../overwrittenLegacy/updateRelationListWithoutArtificialPotato";
import { UnstableFrequencyUpdateRelationWithoutArtificialPotatoes } from "../unstableFrequency/updateRelationWithoutArtificialPotatoes";

export const ArtificialPotatoUpdateWithoutInvisibleTransaction = builder
  .inputRef<any>("ArtificialPotatoUpdateWithoutInvisibleTransaction")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      echoChambers: t.field({
        type: EchoChamberUpdateRelationListWithoutVerifier,
        required: false,
      }),
      ghostRecord: t.field({
        type: GhostRecordUpdateRelationWithoutArtificialPotato,
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
