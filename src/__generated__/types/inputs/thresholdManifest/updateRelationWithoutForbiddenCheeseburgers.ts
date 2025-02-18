import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutForbiddenCheeseburgers } from "./createWithoutForbiddenCheeseburgers";
import { ThresholdManifestUpdateWithoutForbiddenCheeseburgers } from "./updateWithoutForbiddenCheeseburgers";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutForbiddenCheeseburgers = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutForbiddenCheeseburgers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutForbiddenCheeseburgers }),
      update: t.field({ type: ThresholdManifestUpdateWithoutForbiddenCheeseburgers }),
    }),
  });
