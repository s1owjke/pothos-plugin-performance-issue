import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutRealmDirectory } from "../hypotheticalRevenue/createRelationWithoutRealmDirectory";
import { ThresholdManifestCreateRelationWithoutRealmDirectory } from "../thresholdManifest/createRelationWithoutRealmDirectory";
import { UnstableFrequencyCreateRelationWithoutRealmDirectories } from "../unstableFrequency/createRelationWithoutRealmDirectories";

export const RealmDirectoryCreateWithoutVortexReport = builder.inputRef<any>("RealmDirectoryCreateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutRealmDirectory,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutRealmDirectory,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutRealmDirectories,
      required: false,
    }),
  }),
});
