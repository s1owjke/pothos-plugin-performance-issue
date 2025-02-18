import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("ForbiddenCheeseburgerUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
      set: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
      disconnect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
      create: t.field({ type: [ForbiddenCheeseburgerCreateWithoutThresholdManifest] }),
    }),
  });
