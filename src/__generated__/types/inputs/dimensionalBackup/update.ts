import { builder } from "src/builder";

import { GravityOverrideUpdateRelationListWithoutDimensionalBackup } from "../gravityOverride/updateRelationListWithoutDimensionalBackup";
import { PortalIndexUpdateRelationListWithoutDimensionalBackups } from "../portalIndex/updateRelationListWithoutDimensionalBackups";
import { SchrodingerUserUpdateRelationWithoutDimensionalBackup } from "../schrodingerUser/updateRelationWithoutDimensionalBackup";
import { ThresholdManifestUpdateRelationWithoutDimensionalBackups } from "../thresholdManifest/updateRelationWithoutDimensionalBackups";

export const DimensionalBackupUpdate = builder.inputRef<any>("DimensionalBackupUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverrides: t.field({
      type: GravityOverrideUpdateRelationListWithoutDimensionalBackup,
      required: false,
    }),
    portalIndexes: t.field({
      type: PortalIndexUpdateRelationListWithoutDimensionalBackups,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutDimensionalBackup,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutDimensionalBackups,
      required: false,
    }),
  }),
});
