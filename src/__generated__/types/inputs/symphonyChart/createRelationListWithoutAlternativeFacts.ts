import { builder } from "src/builder";

import { SymphonyChartCreateWithoutAlternativeFacts } from "./createWithoutAlternativeFacts";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationListWithoutAlternativeFacts = builder
  .inputRef<any>("SymphonyChartCreateRelationListWithoutAlternativeFacts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutAlternativeFacts] }),
    }),
  });
