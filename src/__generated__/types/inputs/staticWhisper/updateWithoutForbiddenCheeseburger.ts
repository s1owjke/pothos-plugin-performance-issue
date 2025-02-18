import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutStaticWhispers } from "../thresholdManifest/updateRelationWithoutStaticWhispers";

export const StaticWhisperUpdateWithoutForbiddenCheeseburger = builder.inputRef<any>("StaticWhisperUpdateWithoutForbiddenCheeseburger").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutStaticWhispers,
      required: false,
    }),
  }),
});
