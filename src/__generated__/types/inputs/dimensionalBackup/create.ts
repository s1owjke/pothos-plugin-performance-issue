import { builder } from "src/builder";

import { GravityOverrideCreateRelationListWithoutDimensionalBackup } from "../gravityOverride/createRelationListWithoutDimensionalBackup";
import { PortalIndexCreateRelationListWithoutDimensionalBackups } from "../portalIndex/createRelationListWithoutDimensionalBackups";
import { SchrodingerUserCreateRelationWithoutDimensionalBackup } from "../schrodingerUser/createRelationWithoutDimensionalBackup";
import { ThresholdManifestCreateRelationWithoutDimensionalBackups } from "../thresholdManifest/createRelationWithoutDimensionalBackups";

export const DimensionalBackupCreate = builder.inputRef<any>("DimensionalBackupCreate").implement({
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
