import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutTimeTravelLog } from "../hypotheticalRevenue/updateRelationWithoutTimeTravelLog";
import { ThresholdManifestUpdateRelationWithoutTimeTravelLog } from "../thresholdManifest/updateRelationWithoutTimeTravelLog";
import { UnstableFrequencyUpdateRelationWithoutTimeTravelLogs } from "../unstableFrequency/updateRelationWithoutTimeTravelLogs";

export const TimeTravelLogUpdateWithoutVortexReport = builder.inputRef<any>("TimeTravelLogUpdateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutTimeTravelLog,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutTimeTravelLog,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutTimeTravelLogs,
      required: false,
    }),
  }),
});
