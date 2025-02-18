import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutLostAndNeverFounds } from "./createWithoutLostAndNeverFounds";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutLostAndNeverFounds = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutLostAndNeverFounds")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutLostAndNeverFounds }),
    }),
  });
