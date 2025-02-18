import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutRealmDirectory } from "../thresholdManifest/createRelationWithoutRealmDirectory";
import { UnstableFrequencyCreateRelationWithoutRealmDirectories } from "../unstableFrequency/createRelationWithoutRealmDirectories";
import { VortexReportCreateRelationWithoutRealmDirectory } from "../vortexReport/createRelationWithoutRealmDirectory";

export const RealmDirectoryCreateWithoutHypotheticalRevenue = builder.inputRef<any>("RealmDirectoryCreateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
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
