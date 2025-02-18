import { builder } from "src/builder";

import { StaticWhisperCreateRelationListWithoutForbiddenCheeseburger } from "../staticWhisper/createRelationListWithoutForbiddenCheeseburger";

export const ForbiddenCheeseburgerCreateWithoutThresholdManifest = builder
  .inputRef<any>("ForbiddenCheeseburgerCreateWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      staticWhispers: t.field({
        type: StaticWhisperCreateRelationListWithoutForbiddenCheeseburger,
        required: false,
      }),
    }),
  });
