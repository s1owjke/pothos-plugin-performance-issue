import { builder } from "src/builder";

import { GravityOverrideCreateRelationListWithoutDimensionalBackup } from "../gravityOverride/createRelationListWithoutDimensionalBackup";
import { PortalIndexCreateRelationListWithoutDimensionalBackups } from "../portalIndex/createRelationListWithoutDimensionalBackups";
import { ThresholdManifestCreateRelationWithoutDimensionalBackups } from "../thresholdManifest/createRelationWithoutDimensionalBackups";

export const DimensionalBackupCreateWithoutSchrodingerUser = builder.inputRef<any>("DimensionalBackupCreateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverrides: t.field({
      type: GravityOverrideCreateRelationListWithoutDimensionalBackup,
      required: false,
    }),
    portalIndexes: t.field({
      type: PortalIndexCreateRelationListWithoutDimensionalBackups,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutDimensionalBackups,
      required: true,
    }),
  }),
});
