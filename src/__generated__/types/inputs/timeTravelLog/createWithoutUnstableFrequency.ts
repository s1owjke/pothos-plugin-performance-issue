import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutTimeTravelLog } from "../hypotheticalRevenue/createRelationWithoutTimeTravelLog";
import { ThresholdManifestCreateRelationWithoutTimeTravelLog } from "../thresholdManifest/createRelationWithoutTimeTravelLog";
import { VortexReportCreateRelationWithoutTimeTravelLog } from "../vortexReport/createRelationWithoutTimeTravelLog";

export const TimeTravelLogCreateWithoutUnstableFrequency = builder.inputRef<any>("TimeTravelLogCreateWithoutUnstableFrequency").implement({
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
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutTimeTravelLog,
      required: false,
    }),
  }),
});
