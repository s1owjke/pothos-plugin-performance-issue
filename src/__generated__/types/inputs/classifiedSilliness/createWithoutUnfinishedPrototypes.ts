import { builder } from "src/builder";

import { GhostRecordCreateRelationWithoutClassifiedSilliness } from "../ghostRecord/createRelationWithoutClassifiedSilliness";
import { PortalIndexCreateRelationWithoutClassifiedSillinesses } from "../portalIndex/createRelationWithoutClassifiedSillinesses";
import { SymphonyChartCreateRelationWithoutClassifiedSillinesses } from "../symphonyChart/createRelationWithoutClassifiedSillinesses";
import { ThresholdManifestCreateRelationWithoutClassifiedSillinesses } from "../thresholdManifest/createRelationWithoutClassifiedSillinesses";
import { UnstableFrequencyCreateRelationWithoutClassifiedSillinesses } from "../unstableFrequency/createRelationWithoutClassifiedSillinesses";

export const ClassifiedSillinessCreateWithoutUnfinishedPrototypes = builder
  .inputRef<any>("ClassifiedSillinessCreateWithoutUnfinishedPrototypes")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      ghostRecord: t.field({
        type: GhostRecordCreateRelationWithoutClassifiedSilliness,
        required: false,
      }),
      portalIndex: t.field({
        type: PortalIndexCreateRelationWithoutClassifiedSillinesses,
        required: false,
      }),
      symphonyChart: t.field({
        type: SymphonyChartCreateRelationWithoutClassifiedSillinesses,
        required: true,
      }),
      thresholdManifest: t.field({
        type: ThresholdManifestCreateRelationWithoutClassifiedSillinesses,
        required: true,
      }),
      unstableFrequency: t.field({
        type: UnstableFrequencyCreateRelationWithoutClassifiedSillinesses,
        required: false,
      }),
    }),
  });
