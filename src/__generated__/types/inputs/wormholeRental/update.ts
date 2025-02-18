import { builder } from "src/builder";

import { UnstableFrequencyUpdateRelationWithoutWormholeRentals } from "../unstableFrequency/updateRelationWithoutWormholeRentals";

export const WormholeRentalUpdate = builder.inputRef<any>("WormholeRentalUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutWormholeRentals,
      required: false,
    }),
  }),
});
