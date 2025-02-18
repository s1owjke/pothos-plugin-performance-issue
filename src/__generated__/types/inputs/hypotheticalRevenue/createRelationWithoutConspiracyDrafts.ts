import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutConspiracyDrafts = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutConspiracyDrafts }),
    }),
  });
