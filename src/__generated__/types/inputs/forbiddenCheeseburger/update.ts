import { builder } from "src/builder";

import { StaticWhisperUpdateRelationListWithoutForbiddenCheeseburger } from "../staticWhisper/updateRelationListWithoutForbiddenCheeseburger";
import { ThresholdManifestUpdateRelationWithoutForbiddenCheeseburgers } from "../thresholdManifest/updateRelationWithoutForbiddenCheeseburgers";

export const ForbiddenCheeseburgerUpdate = builder.inputRef<any>("ForbiddenCheeseburgerUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    staticWhispers: t.field({
      type: StaticWhisperUpdateRelationListWithoutForbiddenCheeseburger,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutForbiddenCheeseburgers,
      required: false,
    }),
  }),
});
