import { builder } from "src/builder";

import { SchrodingerUserCreateRelationWithoutThoughtCaches } from "../schrodingerUser/createRelationWithoutThoughtCaches";
import { SymphonyChartCreateRelationWithoutThoughtCaches } from "../symphonyChart/createRelationWithoutThoughtCaches";

export const ThoughtCacheCreate = builder.inputRef<any>("ThoughtCacheCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutThoughtCaches,
      required: true,
    }),
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutThoughtCaches,
      required: true,
    }),
  }),
});
