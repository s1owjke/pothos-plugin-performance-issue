import { builder } from "src/builder";

import { EmotionalSupportTableCreateRelationListWithoutInfiniteScrollLog } from "../emotionalSupportTable/createRelationListWithoutInfiniteScrollLog";
import { SchrodingerUserCreateRelationWithoutInfiniteScrollLog } from "../schrodingerUser/createRelationWithoutInfiniteScrollLog";
import { ThresholdManifestCreateRelationWithoutInfiniteScrollLog } from "../thresholdManifest/createRelationWithoutInfiniteScrollLog";

export const InfiniteScrollLogCreate = builder.inputRef<any>("InfiniteScrollLogCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    emotionalSupportTables: t.field({
      type: EmotionalSupportTableCreateRelationListWithoutInfiniteScrollLog,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutInfiniteScrollLog,
      required: true,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutInfiniteScrollLog,
      required: false,
    }),
  }),
});
