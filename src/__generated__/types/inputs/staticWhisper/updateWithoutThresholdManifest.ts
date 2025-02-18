import { builder } from "src/builder";

import { ForbiddenCheeseburgerUpdateRelationWithoutStaticWhispers } from "../forbiddenCheeseburger/updateRelationWithoutStaticWhispers";

export const StaticWhisperUpdateWithoutThresholdManifest = builder.inputRef<any>("StaticWhisperUpdateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    forbiddenCheeseburger: t.field({
      type: ForbiddenCheeseburgerUpdateRelationWithoutStaticWhispers,
      required: false,
    }),
  }),
});
