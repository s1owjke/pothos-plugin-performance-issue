import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutForbiddenCheeseburgers } from "./createWithoutForbiddenCheeseburgers";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutForbiddenCheeseburgers = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutForbiddenCheeseburgers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutForbiddenCheeseburgers] }),
    }),
  });
