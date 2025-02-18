import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutLostAndNeverFounds } from "./createWithoutLostAndNeverFounds";
import { HypotheticalRevenueUpdateWithoutLostAndNeverFounds } from "./updateWithoutLostAndNeverFounds";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutLostAndNeverFounds = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutLostAndNeverFounds")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutLostAndNeverFounds }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutLostAndNeverFounds }),
    }),
  });
