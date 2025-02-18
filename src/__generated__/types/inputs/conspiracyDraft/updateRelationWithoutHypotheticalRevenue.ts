import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ConspiracyDraftUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("ConspiracyDraftUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ConspiracyDraftWhereUnique }),
      disconnect: t.field({ type: ConspiracyDraftWhereUnique }),
      create: t.field({ type: ConspiracyDraftCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: ConspiracyDraftUpdateWithoutHypotheticalRevenue }),
    }),
  });
