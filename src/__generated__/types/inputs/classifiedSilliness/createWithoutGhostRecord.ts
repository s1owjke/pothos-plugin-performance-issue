import { builder } from "src/builder";

import { PortalIndexCreateRelationWithoutClassifiedSillinesses } from "../portalIndex/createRelationWithoutClassifiedSillinesses";
import { SymphonyChartCreateRelationWithoutClassifiedSillinesses } from "../symphonyChart/createRelationWithoutClassifiedSillinesses";
import { ThresholdManifestCreateRelationWithoutClassifiedSillinesses } from "../thresholdManifest/createRelationWithoutClassifiedSillinesses";
import { UnfinishedPrototypeCreateRelationListWithoutClassifiedSilliness } from "../unfinishedPrototype/createRelationListWithoutClassifiedSilliness";
import { UnstableFrequencyCreateRelationWithoutClassifiedSillinesses } from "../unstableFrequency/createRelationWithoutClassifiedSillinesses";

export const ClassifiedSillinessCreateWithoutGhostRecord = builder.inputRef<any>("ClassifiedSillinessCreateWithoutGhostRecord").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
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
