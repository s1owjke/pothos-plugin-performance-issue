import { builder } from "src/builder";

import { SchrodingerUserCreateRelationWithoutThoughtCaches } from "../schrodingerUser/createRelationWithoutThoughtCaches";

export const ThoughtCacheCreateWithoutSymphonyChart = builder.inputRef<any>("ThoughtCacheCreateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutThoughtCaches,
      required: true,
    }),
  }),
});
