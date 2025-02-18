import { builder } from "src/builder";

import { UnstableFrequencyCreateRelationWithoutWormholeRentals } from "../unstableFrequency/createRelationWithoutWormholeRentals";

export const WormholeRentalCreate = builder.inputRef<any>("WormholeRentalCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutWormholeRentals,
      required: false,
    }),
  }),
});
