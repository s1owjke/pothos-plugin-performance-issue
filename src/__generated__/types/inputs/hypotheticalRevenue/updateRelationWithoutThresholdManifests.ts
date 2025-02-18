import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { HypotheticalRevenueUpdateWithoutThresholdManifests } from "./updateWithoutThresholdManifests";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutThresholdManifests = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutThresholdManifests }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutThresholdManifests }),
    }),
  });
