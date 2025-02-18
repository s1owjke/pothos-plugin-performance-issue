import { builder } from "src/builder";

import { GravityOverrideUpdateRelationListWithoutDimensionalBackup } from "../gravityOverride/updateRelationListWithoutDimensionalBackup";
import { PortalIndexUpdateRelationListWithoutDimensionalBackups } from "../portalIndex/updateRelationListWithoutDimensionalBackups";
import { ThresholdManifestUpdateRelationWithoutDimensionalBackups } from "../thresholdManifest/updateRelationWithoutDimensionalBackups";

export const DimensionalBackupUpdateWithoutSchrodingerUser = builder.inputRef<any>("DimensionalBackupUpdateWithoutSchrodingerUser").implement({
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
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutDimensionalBackups,
      required: false,
    }),
  }),
});
