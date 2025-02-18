import { builder } from "src/builder";

export const WormholeRentalCreateWithoutUnstableFrequency = builder.inputRef<any>("WormholeRentalCreateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
