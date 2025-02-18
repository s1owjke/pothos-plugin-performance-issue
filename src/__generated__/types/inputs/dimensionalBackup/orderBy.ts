import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { SchrodingerUserOrderBy } from "../schrodingerUser/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";

export const DimensionalBackupOrderBy = builder.inputRef<any>("DimensionalBackupOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserOrderBy, required: false }),
    schrodingerUserId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
  }),
});
