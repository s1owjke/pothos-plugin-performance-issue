import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { EmotionalSupportTableWhereRelationList } from "../emotionalSupportTable/whereRelationList";
import { IdFilter } from "../idFilter";
import { SchrodingerUserWhere } from "../schrodingerUser/where";
import { ThresholdManifestWhere } from "../thresholdManifest/where";

export const InfiniteScrollLogWhere = builder.inputRef<any>("InfiniteScrollLogWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    emotionalSupportTables: t.field({
      type: EmotionalSupportTableWhereRelationList,
      required: false,
    }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [InfiniteScrollLogWhere], required: false }),
    OR: t.field({ type: [InfiniteScrollLogWhere], required: false }),
    NOT: t.field({ type: [InfiniteScrollLogWhere], required: false }),
  }),
});
