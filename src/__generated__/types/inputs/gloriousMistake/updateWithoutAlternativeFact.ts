import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutGloriousMistakes } from "../thresholdManifest/updateRelationWithoutGloriousMistakes";

export const GloriousMistakeUpdateWithoutAlternativeFact = builder.inputRef<any>("GloriousMistakeUpdateWithoutAlternativeFact").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutGloriousMistakes,
      required: false,
    }),
  }),
});
