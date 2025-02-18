import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutRealmDirectory } from "../thresholdManifest/updateRelationWithoutRealmDirectory";
import { UnstableFrequencyUpdateRelationWithoutRealmDirectories } from "../unstableFrequency/updateRelationWithoutRealmDirectories";
import { VortexReportUpdateRelationWithoutRealmDirectory } from "../vortexReport/updateRelationWithoutRealmDirectory";

export const RealmDirectoryUpdateWithoutHypotheticalRevenue = builder.inputRef<any>("RealmDirectoryUpdateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutRealmDirectory,
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
