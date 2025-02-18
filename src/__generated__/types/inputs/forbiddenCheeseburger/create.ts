import { builder } from "src/builder";

import { StaticWhisperCreateRelationListWithoutForbiddenCheeseburger } from "../staticWhisper/createRelationListWithoutForbiddenCheeseburger";
import { ThresholdManifestCreateRelationWithoutForbiddenCheeseburgers } from "../thresholdManifest/createRelationWithoutForbiddenCheeseburgers";

export const ForbiddenCheeseburgerCreate = builder.inputRef<any>("ForbiddenCheeseburgerCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    staticWhispers: t.field({
      type: StaticWhisperCreateRelationListWithoutForbiddenCheeseburger,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutForbiddenCheeseburgers,
      required: true,
    }),
  }),
});
