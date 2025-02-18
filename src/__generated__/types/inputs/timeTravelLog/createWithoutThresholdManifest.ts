import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutTimeTravelLog } from "../hypotheticalRevenue/createRelationWithoutTimeTravelLog";
import { UnstableFrequencyCreateRelationWithoutTimeTravelLogs } from "../unstableFrequency/createRelationWithoutTimeTravelLogs";
import { VortexReportCreateRelationWithoutTimeTravelLog } from "../vortexReport/createRelationWithoutTimeTravelLog";

export const TimeTravelLogCreateWithoutThresholdManifest = builder.inputRef<any>("TimeTravelLogCreateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutTimeTravelLog,
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
