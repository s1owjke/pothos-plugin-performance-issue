import { builder } from "src/builder";

import { SchrodingerUserCreateRelationWithoutInfiniteScrollLog } from "../schrodingerUser/createRelationWithoutInfiniteScrollLog";
import { ThresholdManifestCreateRelationWithoutInfiniteScrollLog } from "../thresholdManifest/createRelationWithoutInfiniteScrollLog";

export const InfiniteScrollLogCreateWithoutEmotionalSupportTables = builder
  .inputRef<any>("InfiniteScrollLogCreateWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
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
