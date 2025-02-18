import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ForbiddenCheeseburgerUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("ForbiddenCheeseburgerUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
      disconnect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
      create: t.field({ type: ForbiddenCheeseburgerCreateWithoutThresholdManifest }),
      update: t.field({ type: ForbiddenCheeseburgerUpdateWithoutThresholdManifest }),
    }),
  });
