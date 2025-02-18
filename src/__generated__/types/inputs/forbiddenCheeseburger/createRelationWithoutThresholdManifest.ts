import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("ForbiddenCheeseburgerCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
      create: t.field({ type: ForbiddenCheeseburgerCreateWithoutThresholdManifest }),
    }),
  });
