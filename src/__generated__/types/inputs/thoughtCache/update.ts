import { builder } from "src/builder";

import { SchrodingerUserUpdateRelationWithoutThoughtCaches } from "../schrodingerUser/updateRelationWithoutThoughtCaches";
import { SymphonyChartUpdateRelationWithoutThoughtCaches } from "../symphonyChart/updateRelationWithoutThoughtCaches";

export const ThoughtCacheUpdate = builder.inputRef<any>("ThoughtCacheUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutThoughtCaches,
      required: false,
    }),
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutThoughtCaches,
      required: false,
    }),
  }),
});
