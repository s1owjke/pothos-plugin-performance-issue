import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutThresholdManifests = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutThresholdManifests] }),
    }),
  });
