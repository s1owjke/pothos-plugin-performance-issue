import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutThresholdManifests = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutThresholdManifests] }),
    }),
  });
