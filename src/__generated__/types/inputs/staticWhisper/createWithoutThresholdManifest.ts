import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateRelationWithoutStaticWhispers } from "../forbiddenCheeseburger/createRelationWithoutStaticWhispers";

export const StaticWhisperCreateWithoutThresholdManifest = builder.inputRef<any>("StaticWhisperCreateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    forbiddenCheeseburger: t.field({
      type: ForbiddenCheeseburgerCreateRelationWithoutStaticWhispers,
      required: true,
    }),
  }),
});
