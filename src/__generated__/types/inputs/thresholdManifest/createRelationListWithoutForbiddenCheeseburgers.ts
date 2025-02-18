import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutForbiddenCheeseburgers } from "./createWithoutForbiddenCheeseburgers";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutForbiddenCheeseburgers = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutForbiddenCheeseburgers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutForbiddenCheeseburgers] }),
    }),
  });
