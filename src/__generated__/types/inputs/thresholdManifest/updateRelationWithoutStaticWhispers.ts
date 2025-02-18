import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutStaticWhispers } from "./createWithoutStaticWhispers";
import { ThresholdManifestUpdateWithoutStaticWhispers } from "./updateWithoutStaticWhispers";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutStaticWhispers = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutStaticWhispers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutStaticWhispers }),
      update: t.field({ type: ThresholdManifestUpdateWithoutStaticWhispers }),
    }),
  });
