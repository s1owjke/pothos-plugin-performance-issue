import { builder } from "src/builder";

import { AlternativeFactCreateRelationWithoutGloriousMistakes } from "../alternativeFact/createRelationWithoutGloriousMistakes";

export const GloriousMistakeCreateWithoutThresholdManifest = builder.inputRef<any>("GloriousMistakeCreateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    alternativeFact: t.field({
      type: AlternativeFactCreateRelationWithoutGloriousMistakes,
      required: true,
    }),
  }),
});
