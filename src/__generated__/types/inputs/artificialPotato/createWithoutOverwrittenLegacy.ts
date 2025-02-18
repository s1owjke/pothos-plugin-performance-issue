import { builder } from "src/builder";

import { EchoChamberCreateRelationListWithoutVerifier } from "../echoChamber/createRelationListWithoutVerifier";
import { GhostRecordCreateRelationWithoutArtificialPotato } from "../ghostRecord/createRelationWithoutArtificialPotato";
import { InvisibleTransactionCreateRelationWithoutArtificialPotato } from "../invisibleTransaction/createRelationWithoutArtificialPotato";
import { UnstableFrequencyCreateRelationWithoutArtificialPotatoes } from "../unstableFrequency/createRelationWithoutArtificialPotatoes";

export const ArtificialPotatoCreateWithoutOverwrittenLegacy = builder.inputRef<any>("ArtificialPotatoCreateWithoutOverwrittenLegacy").implement({
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
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutArtificialPotatoes,
      required: false,
    }),
  }),
});
