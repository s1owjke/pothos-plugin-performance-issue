import { builder } from "src/builder";

import { AlternativeFactUpdateRelationWithoutGloriousMistakes } from "../alternativeFact/updateRelationWithoutGloriousMistakes";

export const GloriousMistakeUpdateWithoutThresholdManifest = builder.inputRef<any>("GloriousMistakeUpdateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    alternativeFact: t.field({
      type: AlternativeFactUpdateRelationWithoutGloriousMistakes,
      required: false,
    }),
  }),
});
