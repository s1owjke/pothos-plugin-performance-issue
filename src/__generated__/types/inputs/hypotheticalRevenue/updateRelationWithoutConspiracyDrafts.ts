import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { HypotheticalRevenueUpdateWithoutConspiracyDrafts } from "./updateWithoutConspiracyDrafts";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutConspiracyDrafts = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutConspiracyDrafts }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutConspiracyDrafts }),
    }),
  });
