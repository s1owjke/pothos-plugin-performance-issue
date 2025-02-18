import { builder } from "src/builder";

import { StaticWhisperUpdateRelationListWithoutForbiddenCheeseburger } from "../staticWhisper/updateRelationListWithoutForbiddenCheeseburger";

export const ForbiddenCheeseburgerUpdateWithoutThresholdManifest = builder
  .inputRef<any>("ForbiddenCheeseburgerUpdateWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      staticWhispers: t.field({
        type: StaticWhisperUpdateRelationListWithoutForbiddenCheeseburger,
        required: false,
      }),
    }),
  });
