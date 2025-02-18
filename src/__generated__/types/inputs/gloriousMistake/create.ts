import { builder } from "src/builder";

import { AlternativeFactCreateRelationWithoutGloriousMistakes } from "../alternativeFact/createRelationWithoutGloriousMistakes";
import { ThresholdManifestCreateRelationWithoutGloriousMistakes } from "../thresholdManifest/createRelationWithoutGloriousMistakes";

export const GloriousMistakeCreate = builder.inputRef<any>("GloriousMistakeCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    alternativeFact: t.field({
      type: AlternativeFactCreateRelationWithoutGloriousMistakes,
      required: true,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutGloriousMistakes,
      required: true,
    }),
  }),
});
