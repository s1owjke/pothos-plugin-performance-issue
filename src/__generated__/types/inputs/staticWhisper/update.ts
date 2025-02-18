import { builder } from "src/builder";

import { ForbiddenCheeseburgerUpdateRelationWithoutStaticWhispers } from "../forbiddenCheeseburger/updateRelationWithoutStaticWhispers";
import { ThresholdManifestUpdateRelationWithoutStaticWhispers } from "../thresholdManifest/updateRelationWithoutStaticWhispers";

export const StaticWhisperUpdate = builder.inputRef<any>("StaticWhisperUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    forbiddenCheeseburger: t.field({
      type: ForbiddenCheeseburgerUpdateRelationWithoutStaticWhispers,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutStaticWhispers,
      required: false,
    }),
  }),
});
