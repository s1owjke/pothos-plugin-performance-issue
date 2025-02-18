import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutGloriousMistakes } from "../thresholdManifest/createRelationWithoutGloriousMistakes";

export const GloriousMistakeCreateWithoutAlternativeFact = builder.inputRef<any>("GloriousMistakeCreateWithoutAlternativeFact").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutGloriousMistakes,
      required: true,
    }),
  }),
});
