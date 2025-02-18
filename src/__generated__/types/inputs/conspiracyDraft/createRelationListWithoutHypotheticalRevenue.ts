import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("ConspiracyDraftCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      create: t.field({ type: [ConspiracyDraftCreateWithoutHypotheticalRevenue] }),
    }),
  });
