import { builder } from "src/builder";

import { GhostRecordUpdateRelationWithoutClassifiedSilliness } from "../ghostRecord/updateRelationWithoutClassifiedSilliness";
import { PortalIndexUpdateRelationWithoutClassifiedSillinesses } from "../portalIndex/updateRelationWithoutClassifiedSillinesses";
import { SymphonyChartUpdateRelationWithoutClassifiedSillinesses } from "../symphonyChart/updateRelationWithoutClassifiedSillinesses";
import { ThresholdManifestUpdateRelationWithoutClassifiedSillinesses } from "../thresholdManifest/updateRelationWithoutClassifiedSillinesses";
import { UnfinishedPrototypeUpdateRelationListWithoutClassifiedSilliness } from "../unfinishedPrototype/updateRelationListWithoutClassifiedSilliness";
import { UnstableFrequencyUpdateRelationWithoutClassifiedSillinesses } from "../unstableFrequency/updateRelationWithoutClassifiedSillinesses";

export const ClassifiedSillinessUpdate = builder.inputRef<any>("ClassifiedSillinessUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    ghostRecord: t.field({
      type: GhostRecordUpdateRelationWithoutClassifiedSilliness,
      required: false,
    }),
    portalIndex: t.field({
      type: PortalIndexUpdateRelationWithoutClassifiedSillinesses,
      required: false,
    }),
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutClassifiedSillinesses,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutClassifiedSillinesses,
      required: false,
    }),
    unfinishedPrototypes: t.field({
      type: UnfinishedPrototypeUpdateRelationListWithoutClassifiedSilliness,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutClassifiedSillinesses,
      required: false,
    }),
  }),
});
