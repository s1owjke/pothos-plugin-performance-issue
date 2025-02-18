import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { SchrodingerUserWhere } from "../schrodingerUser/where";
import { SymphonyChartWhere } from "../symphonyChart/where";

export const ThoughtCacheWhere = builder.inputRef<any>("ThoughtCacheWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    symphonyChart: t.field({ type: SymphonyChartWhere, required: false }),
    symphonyChartId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [ThoughtCacheWhere], required: false }),
    OR: t.field({ type: [ThoughtCacheWhere], required: false }),
    NOT: t.field({ type: [ThoughtCacheWhere], required: false }),
  }),
});
