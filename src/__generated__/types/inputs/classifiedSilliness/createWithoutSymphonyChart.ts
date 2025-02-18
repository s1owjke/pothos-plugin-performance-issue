import { builder } from "src/builder";

import { GhostRecordCreateRelationWithoutClassifiedSilliness } from "../ghostRecord/createRelationWithoutClassifiedSilliness";
import { PortalIndexCreateRelationWithoutClassifiedSillinesses } from "../portalIndex/createRelationWithoutClassifiedSillinesses";
import { ThresholdManifestCreateRelationWithoutClassifiedSillinesses } from "../thresholdManifest/createRelationWithoutClassifiedSillinesses";
import { UnfinishedPrototypeCreateRelationListWithoutClassifiedSilliness } from "../unfinishedPrototype/createRelationListWithoutClassifiedSilliness";
import { UnstableFrequencyCreateRelationWithoutClassifiedSillinesses } from "../unstableFrequency/createRelationWithoutClassifiedSillinesses";

export const ClassifiedSillinessCreateWithoutSymphonyChart = builder.inputRef<any>("ClassifiedSillinessCreateWithoutSymphonyChart").implement({
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
