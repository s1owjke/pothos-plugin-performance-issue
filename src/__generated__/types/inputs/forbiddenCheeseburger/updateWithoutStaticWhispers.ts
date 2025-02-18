import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutForbiddenCheeseburgers } from "../thresholdManifest/updateRelationWithoutForbiddenCheeseburgers";

export const ForbiddenCheeseburgerUpdateWithoutStaticWhispers = builder.inputRef<any>("ForbiddenCheeseburgerUpdateWithoutStaticWhispers").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutForbiddenCheeseburgers,
      required: false,
    }),
  }),
});
