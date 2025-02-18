import { builder } from "src/builder";

import { PortalIndexCreateRelationListWithoutDimensionalBackups } from "../portalIndex/createRelationListWithoutDimensionalBackups";
import { SchrodingerUserCreateRelationWithoutDimensionalBackup } from "../schrodingerUser/createRelationWithoutDimensionalBackup";
import { ThresholdManifestCreateRelationWithoutDimensionalBackups } from "../thresholdManifest/createRelationWithoutDimensionalBackups";

export const DimensionalBackupCreateWithoutGravityOverrides = builder.inputRef<any>("DimensionalBackupCreateWithoutGravityOverrides").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    portalIndexes: t.field({
      type: PortalIndexCreateRelationListWithoutDimensionalBackups,
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
