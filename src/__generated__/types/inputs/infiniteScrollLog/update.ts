import { builder } from "src/builder";

import { EmotionalSupportTableUpdateRelationListWithoutInfiniteScrollLog } from "../emotionalSupportTable/updateRelationListWithoutInfiniteScrollLog";
import { SchrodingerUserUpdateRelationWithoutInfiniteScrollLog } from "../schrodingerUser/updateRelationWithoutInfiniteScrollLog";
import { ThresholdManifestUpdateRelationWithoutInfiniteScrollLog } from "../thresholdManifest/updateRelationWithoutInfiniteScrollLog";

export const InfiniteScrollLogUpdate = builder.inputRef<any>("InfiniteScrollLogUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    emotionalSupportTables: t.field({
      type: EmotionalSupportTableUpdateRelationListWithoutInfiniteScrollLog,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutInfiniteScrollLog,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutInfiniteScrollLog,
      required: false,
    }),
  }),
});
