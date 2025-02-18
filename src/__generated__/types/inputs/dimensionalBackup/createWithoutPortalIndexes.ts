import { builder } from "src/builder";

import { GravityOverrideCreateRelationListWithoutDimensionalBackup } from "../gravityOverride/createRelationListWithoutDimensionalBackup";
import { SchrodingerUserCreateRelationWithoutDimensionalBackup } from "../schrodingerUser/createRelationWithoutDimensionalBackup";
import { ThresholdManifestCreateRelationWithoutDimensionalBackups } from "../thresholdManifest/createRelationWithoutDimensionalBackups";

export const DimensionalBackupCreateWithoutPortalIndexes = builder.inputRef<any>("DimensionalBackupCreateWithoutPortalIndexes").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverrides: t.field({
      type: GravityOverrideCreateRelationListWithoutDimensionalBackup,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutDimensionalBackup,
      required: true,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutDimensionalBackups,
      required: true,
    }),
  }),
});
