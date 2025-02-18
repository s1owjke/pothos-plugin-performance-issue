import { builder } from "src/builder";

export const WormholeRentalUpdateWithoutUnstableFrequency = builder.inputRef<any>("WormholeRentalUpdateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
  }),
});
