import { builder } from "src/builder";

import { EmotionalSupportTableCreateRelationListWithoutInfiniteScrollLog } from "../emotionalSupportTable/createRelationListWithoutInfiniteScrollLog";
import { SchrodingerUserCreateRelationWithoutInfiniteScrollLog } from "../schrodingerUser/createRelationWithoutInfiniteScrollLog";

export const InfiniteScrollLogCreateWithoutThresholdManifest = builder.inputRef<any>("InfiniteScrollLogCreateWithoutThresholdManifest").implement({
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
  }),
});
