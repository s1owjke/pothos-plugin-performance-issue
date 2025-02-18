import { builder } from "src/builder";

import { SchrodingerUserUpdateRelationWithoutThoughtCaches } from "../schrodingerUser/updateRelationWithoutThoughtCaches";

export const ThoughtCacheUpdateWithoutSymphonyChart = builder.inputRef<any>("ThoughtCacheUpdateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutThoughtCaches,
      required: false,
    }),
  }),
});
