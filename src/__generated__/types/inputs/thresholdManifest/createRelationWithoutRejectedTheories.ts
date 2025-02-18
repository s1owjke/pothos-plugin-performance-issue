import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutRejectedTheories = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutRejectedTheories }),
    }),
  });
