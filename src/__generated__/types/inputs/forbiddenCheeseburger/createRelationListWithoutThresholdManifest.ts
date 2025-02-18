import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("ForbiddenCheeseburgerCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
      create: t.field({ type: [ForbiddenCheeseburgerCreateWithoutThresholdManifest] }),
    }),
  });
