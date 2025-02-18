import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateRelationWithoutStaticWhispers } from "../forbiddenCheeseburger/createRelationWithoutStaticWhispers";
import { ThresholdManifestCreateRelationWithoutStaticWhispers } from "../thresholdManifest/createRelationWithoutStaticWhispers";

export const StaticWhisperCreate = builder.inputRef<any>("StaticWhisperCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    forbiddenCheeseburger: t.field({
      type: ForbiddenCheeseburgerCreateRelationWithoutStaticWhispers,
      required: true,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutStaticWhispers,
      required: true,
    }),
  }),
});
