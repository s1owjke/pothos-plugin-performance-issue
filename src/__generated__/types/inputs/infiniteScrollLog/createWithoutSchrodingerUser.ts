import { builder } from "src/builder";

import { EmotionalSupportTableCreateRelationListWithoutInfiniteScrollLog } from "../emotionalSupportTable/createRelationListWithoutInfiniteScrollLog";
import { ThresholdManifestCreateRelationWithoutInfiniteScrollLog } from "../thresholdManifest/createRelationWithoutInfiniteScrollLog";

export const InfiniteScrollLogCreateWithoutSchrodingerUser = builder.inputRef<any>("InfiniteScrollLogCreateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    emotionalSupportTables: t.field({
      type: EmotionalSupportTableCreateRelationListWithoutInfiniteScrollLog,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutInfiniteScrollLog,
      required: false,
    }),
  }),
});
