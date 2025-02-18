import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutForbiddenCheeseburgers } from "../thresholdManifest/createRelationWithoutForbiddenCheeseburgers";

export const ForbiddenCheeseburgerCreateWithoutStaticWhispers = builder.inputRef<any>("ForbiddenCheeseburgerCreateWithoutStaticWhispers").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutForbiddenCheeseburgers,
      required: true,
    }),
  }),
});
