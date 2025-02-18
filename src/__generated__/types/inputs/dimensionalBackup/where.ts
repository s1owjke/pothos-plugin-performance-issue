import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhereRelationList } from "../gravityOverride/whereRelationList";
import { IdFilter } from "../idFilter";
import { PortalIndexWhereRelationList } from "../portalIndex/whereRelationList";
import { SchrodingerUserWhere } from "../schrodingerUser/where";
import { ThresholdManifestWhere } from "../thresholdManifest/where";

export const DimensionalBackupWhere = builder.inputRef<any>("DimensionalBackupWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverrides: t.field({ type: GravityOverrideWhereRelationList, required: false }),
    portalIndexes: t.field({ type: PortalIndexWhereRelationList, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [DimensionalBackupWhere], required: false }),
    OR: t.field({ type: [DimensionalBackupWhere], required: false }),
    NOT: t.field({ type: [DimensionalBackupWhere], required: false }),
  }),
});
