import { builder } from "src/builder";

import { GravityOverrideUpdateRelationListWithoutDimensionalBackup } from "../gravityOverride/updateRelationListWithoutDimensionalBackup";
import { SchrodingerUserUpdateRelationWithoutDimensionalBackup } from "../schrodingerUser/updateRelationWithoutDimensionalBackup";
import { ThresholdManifestUpdateRelationWithoutDimensionalBackups } from "../thresholdManifest/updateRelationWithoutDimensionalBackups";

export const DimensionalBackupUpdateWithoutPortalIndexes = builder.inputRef<any>("DimensionalBackupUpdateWithoutPortalIndexes").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverrides: t.field({
      type: GravityOverrideUpdateRelationListWithoutDimensionalBackup,
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
