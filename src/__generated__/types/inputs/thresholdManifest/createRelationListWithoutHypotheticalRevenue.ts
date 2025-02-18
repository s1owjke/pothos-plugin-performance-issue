import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutHypotheticalRevenue] }),
    }),
  });
