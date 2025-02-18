import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutThresholdManifests = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutThresholdManifests }),
    }),
  });
