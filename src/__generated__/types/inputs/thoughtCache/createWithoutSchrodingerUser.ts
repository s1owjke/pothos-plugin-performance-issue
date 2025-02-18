import { builder } from "src/builder";

import { SymphonyChartCreateRelationWithoutThoughtCaches } from "../symphonyChart/createRelationWithoutThoughtCaches";

export const ThoughtCacheCreateWithoutSchrodingerUser = builder.inputRef<any>("ThoughtCacheCreateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutThoughtCaches,
      required: true,
    }),
  }),
});
