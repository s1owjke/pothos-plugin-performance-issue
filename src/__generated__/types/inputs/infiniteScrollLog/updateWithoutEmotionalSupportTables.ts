import { builder } from "src/builder";

import { SchrodingerUserUpdateRelationWithoutInfiniteScrollLog } from "../schrodingerUser/updateRelationWithoutInfiniteScrollLog";
import { ThresholdManifestUpdateRelationWithoutInfiniteScrollLog } from "../thresholdManifest/updateRelationWithoutInfiniteScrollLog";

export const InfiniteScrollLogUpdateWithoutEmotionalSupportTables = builder
  .inputRef<any>("InfiniteScrollLogUpdateWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
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
