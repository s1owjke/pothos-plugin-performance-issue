import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutHypotheticalRevenue] }),
    }),
  });
