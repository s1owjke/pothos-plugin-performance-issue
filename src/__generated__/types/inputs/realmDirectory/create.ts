import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutRealmDirectory } from "../hypotheticalRevenue/createRelationWithoutRealmDirectory";
import { ThresholdManifestCreateRelationWithoutRealmDirectory } from "../thresholdManifest/createRelationWithoutRealmDirectory";
import { UnstableFrequencyCreateRelationWithoutRealmDirectories } from "../unstableFrequency/createRelationWithoutRealmDirectories";
import { VortexReportCreateRelationWithoutRealmDirectory } from "../vortexReport/createRelationWithoutRealmDirectory";

export const RealmDirectoryCreate = builder.inputRef<any>("RealmDirectoryCreate").implement({
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
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutRealmDirectory,
      required: false,
    }),
  }),
});
