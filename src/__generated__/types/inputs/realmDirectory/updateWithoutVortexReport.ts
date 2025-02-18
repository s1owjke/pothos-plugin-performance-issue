import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutRealmDirectory } from "../hypotheticalRevenue/updateRelationWithoutRealmDirectory";
import { ThresholdManifestUpdateRelationWithoutRealmDirectory } from "../thresholdManifest/updateRelationWithoutRealmDirectory";
import { UnstableFrequencyUpdateRelationWithoutRealmDirectories } from "../unstableFrequency/updateRelationWithoutRealmDirectories";

export const RealmDirectoryUpdateWithoutVortexReport = builder.inputRef<any>("RealmDirectoryUpdateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutRealmDirectory,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutRealmDirectory,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutRealmDirectories,
      required: false,
    }),
  }),
});
