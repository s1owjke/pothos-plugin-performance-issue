import { builder } from "src/builder";

import { EmotionalSupportTableUpdateRelationListWithoutInfiniteScrollLog } from "../emotionalSupportTable/updateRelationListWithoutInfiniteScrollLog";
import { ThresholdManifestUpdateRelationWithoutInfiniteScrollLog } from "../thresholdManifest/updateRelationWithoutInfiniteScrollLog";

export const InfiniteScrollLogUpdateWithoutSchrodingerUser = builder.inputRef<any>("InfiniteScrollLogUpdateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    emotionalSupportTables: t.field({
      type: EmotionalSupportTableUpdateRelationListWithoutInfiniteScrollLog,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutInfiniteScrollLog,
      required: false,
    }),
  }),
});
