import { builder } from "src/builder";

import { SymphonyChartUpdateRelationWithoutThoughtCaches } from "../symphonyChart/updateRelationWithoutThoughtCaches";

export const ThoughtCacheUpdateWithoutSchrodingerUser = builder.inputRef<any>("ThoughtCacheUpdateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutThoughtCaches,
      required: false,
    }),
  }),
});
