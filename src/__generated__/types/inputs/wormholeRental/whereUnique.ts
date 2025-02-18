import { builder } from "src/builder";

export const WormholeRentalWhereUnique = builder.inputRef<any>("WormholeRentalWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
