import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutStaticWhispers } from "../thresholdManifest/createRelationWithoutStaticWhispers";

export const StaticWhisperCreateWithoutForbiddenCheeseburger = builder.inputRef<any>("StaticWhisperCreateWithoutForbiddenCheeseburger").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutStaticWhispers,
      required: true,
    }),
  }),
});
