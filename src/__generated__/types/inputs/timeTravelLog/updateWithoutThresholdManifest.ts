import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutTimeTravelLog } from "../hypotheticalRevenue/updateRelationWithoutTimeTravelLog";
import { UnstableFrequencyUpdateRelationWithoutTimeTravelLogs } from "../unstableFrequency/updateRelationWithoutTimeTravelLogs";
import { VortexReportUpdateRelationWithoutTimeTravelLog } from "../vortexReport/updateRelationWithoutTimeTravelLog";

export const TimeTravelLogUpdateWithoutThresholdManifest = builder.inputRef<any>("TimeTravelLogUpdateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutTimeTravelLog,
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
