import { builder } from "src/builder";

import { GhostRecordCreateRelationWithoutClassifiedSilliness } from "../ghostRecord/createRelationWithoutClassifiedSilliness";
import { SymphonyChartCreateRelationWithoutClassifiedSillinesses } from "../symphonyChart/createRelationWithoutClassifiedSillinesses";
import { ThresholdManifestCreateRelationWithoutClassifiedSillinesses } from "../thresholdManifest/createRelationWithoutClassifiedSillinesses";
import { UnfinishedPrototypeCreateRelationListWithoutClassifiedSilliness } from "../unfinishedPrototype/createRelationListWithoutClassifiedSilliness";
import { UnstableFrequencyCreateRelationWithoutClassifiedSillinesses } from "../unstableFrequency/createRelationWithoutClassifiedSillinesses";

export const ClassifiedSillinessCreateWithoutPortalIndex = builder.inputRef<any>("ClassifiedSillinessCreateWithoutPortalIndex").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    ghostRecord: t.field({
      type: GhostRecordCreateRelationWithoutClassifiedSilliness,
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
    unfinishedPrototypes: t.field({
      type: UnfinishedPrototypeCreateRelationListWithoutClassifiedSilliness,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutClassifiedSillinesses,
      required: false,
    }),
  }),
});
