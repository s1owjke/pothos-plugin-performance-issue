import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutLostAndNeverFounds } from "./createWithoutLostAndNeverFounds";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutLostAndNeverFounds = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutLostAndNeverFounds")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutLostAndNeverFounds] }),
    }),
  });
