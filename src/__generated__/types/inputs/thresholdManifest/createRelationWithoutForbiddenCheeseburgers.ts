import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutForbiddenCheeseburgers } from "./createWithoutForbiddenCheeseburgers";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutForbiddenCheeseburgers = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutForbiddenCheeseburgers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutForbiddenCheeseburgers }),
    }),
  });
