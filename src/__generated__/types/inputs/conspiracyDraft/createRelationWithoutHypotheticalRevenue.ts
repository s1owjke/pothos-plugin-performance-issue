import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("ConspiracyDraftCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ConspiracyDraftWhereUnique }),
      create: t.field({ type: ConspiracyDraftCreateWithoutHypotheticalRevenue }),
    }),
  });
