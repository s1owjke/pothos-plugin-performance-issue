import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutRejectedTheories = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutRejectedTheories] }),
    }),
  });
