import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutTimeTravelLog } from "../hypotheticalRevenue/createRelationWithoutTimeTravelLog";
import { ThresholdManifestCreateRelationWithoutTimeTravelLog } from "../thresholdManifest/createRelationWithoutTimeTravelLog";
import { UnstableFrequencyCreateRelationWithoutTimeTravelLogs } from "../unstableFrequency/createRelationWithoutTimeTravelLogs";
import { VortexReportCreateRelationWithoutTimeTravelLog } from "../vortexReport/createRelationWithoutTimeTravelLog";

export const TimeTravelLogCreate = builder.inputRef<any>("TimeTravelLogCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutTimeTravelLog,
      required: false,
    }),
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
