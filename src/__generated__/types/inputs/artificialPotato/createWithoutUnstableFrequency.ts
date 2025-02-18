import { builder } from "src/builder";

import { EchoChamberCreateRelationListWithoutVerifier } from "../echoChamber/createRelationListWithoutVerifier";
import { GhostRecordCreateRelationWithoutArtificialPotato } from "../ghostRecord/createRelationWithoutArtificialPotato";
import { InvisibleTransactionCreateRelationWithoutArtificialPotato } from "../invisibleTransaction/createRelationWithoutArtificialPotato";
import { OverwrittenLegacyCreateRelationListWithoutArtificialPotato } from "../overwrittenLegacy/createRelationListWithoutArtificialPotato";

export const ArtificialPotatoCreateWithoutUnstableFrequency = builder.inputRef<any>("ArtificialPotatoCreateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    echoChambers: t.field({
      type: EchoChamberCreateRelationListWithoutVerifier,
      required: false,
    }),
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
  }),
});
