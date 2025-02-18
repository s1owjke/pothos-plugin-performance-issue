import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutRealmDirectory } from "../hypotheticalRevenue/updateRelationWithoutRealmDirectory";
import { UnstableFrequencyUpdateRelationWithoutRealmDirectories } from "../unstableFrequency/updateRelationWithoutRealmDirectories";
import { VortexReportUpdateRelationWithoutRealmDirectory } from "../vortexReport/updateRelationWithoutRealmDirectory";

export const RealmDirectoryUpdateWithoutThresholdManifest = builder.inputRef<any>("RealmDirectoryUpdateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutRealmDirectory,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutRealmDirectories,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutRealmDirectory,
      required: false,
    }),
  }),
});
