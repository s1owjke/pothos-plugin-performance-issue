import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutRealmDirectory } from "../hypotheticalRevenue/updateRelationWithoutRealmDirectory";
import { ThresholdManifestUpdateRelationWithoutRealmDirectory } from "../thresholdManifest/updateRelationWithoutRealmDirectory";
import { VortexReportUpdateRelationWithoutRealmDirectory } from "../vortexReport/updateRelationWithoutRealmDirectory";

export const RealmDirectoryUpdateWithoutUnstableFrequency = builder.inputRef<any>("RealmDirectoryUpdateWithoutUnstableFrequency").implement({
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
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutRealmDirectory,
      required: false,
    }),
  }),
});
