import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("ConspiracyDraftUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      set: t.field({ type: [ConspiracyDraftWhereUnique] }),
      disconnect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      create: t.field({ type: [ConspiracyDraftCreateWithoutHypotheticalRevenue] }),
    }),
  });
