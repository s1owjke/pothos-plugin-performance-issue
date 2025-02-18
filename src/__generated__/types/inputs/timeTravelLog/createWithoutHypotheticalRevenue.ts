import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutTimeTravelLog } from "../thresholdManifest/createRelationWithoutTimeTravelLog";
import { UnstableFrequencyCreateRelationWithoutTimeTravelLogs } from "../unstableFrequency/createRelationWithoutTimeTravelLogs";
import { VortexReportCreateRelationWithoutTimeTravelLog } from "../vortexReport/createRelationWithoutTimeTravelLog";

export const TimeTravelLogCreateWithoutHypotheticalRevenue = builder.inputRef<any>("TimeTravelLogCreateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutTimeTravelLog,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutTimeTravelLogs,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutTimeTravelLog,
      required: false,
    }),
  }),
});
