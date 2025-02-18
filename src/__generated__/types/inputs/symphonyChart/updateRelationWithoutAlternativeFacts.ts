import { builder } from "src/builder";

import { SymphonyChartCreateWithoutAlternativeFacts } from "./createWithoutAlternativeFacts";
import { SymphonyChartUpdateWithoutAlternativeFacts } from "./updateWithoutAlternativeFacts";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutAlternativeFacts = builder
  .inputRef<any>("SymphonyChartUpdateRelationWithoutAlternativeFacts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      disconnect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutAlternativeFacts }),
      update: t.field({ type: SymphonyChartUpdateWithoutAlternativeFacts }),
    }),
  });
