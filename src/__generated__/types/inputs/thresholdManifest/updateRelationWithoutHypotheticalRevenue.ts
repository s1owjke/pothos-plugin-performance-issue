import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ThresholdManifestUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: ThresholdManifestUpdateWithoutHypotheticalRevenue }),
    }),
  });
