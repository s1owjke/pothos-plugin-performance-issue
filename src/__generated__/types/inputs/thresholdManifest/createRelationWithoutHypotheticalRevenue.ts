import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutHypotheticalRevenue }),
    }),
  });
