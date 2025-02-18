import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutStaticWhispers } from "./createWithoutStaticWhispers";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutStaticWhispers = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutStaticWhispers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutStaticWhispers] }),
    }),
  });
