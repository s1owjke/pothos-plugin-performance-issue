import { builder } from "src/builder";

import { AlternativeFactUpdateRelationWithoutGloriousMistakes } from "../alternativeFact/updateRelationWithoutGloriousMistakes";
import { ThresholdManifestUpdateRelationWithoutGloriousMistakes } from "../thresholdManifest/updateRelationWithoutGloriousMistakes";

export const GloriousMistakeUpdate = builder.inputRef<any>("GloriousMistakeUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    alternativeFact: t.field({
      type: AlternativeFactUpdateRelationWithoutGloriousMistakes,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutGloriousMistakes,
      required: false,
    }),
  }),
});
