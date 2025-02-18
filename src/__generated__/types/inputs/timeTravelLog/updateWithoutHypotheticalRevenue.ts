import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutTimeTravelLog } from "../thresholdManifest/updateRelationWithoutTimeTravelLog";
import { UnstableFrequencyUpdateRelationWithoutTimeTravelLogs } from "../unstableFrequency/updateRelationWithoutTimeTravelLogs";
import { VortexReportUpdateRelationWithoutTimeTravelLog } from "../vortexReport/updateRelationWithoutTimeTravelLog";

export const TimeTravelLogUpdateWithoutHypotheticalRevenue = builder.inputRef<any>("TimeTravelLogUpdateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutTimeTravelLog,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutTimeTravelLogs,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutTimeTravelLog,
      required: false,
    }),
  }),
});
