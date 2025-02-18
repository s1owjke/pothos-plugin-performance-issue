import { builder } from "src/builder";

import { SymphonyChartCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutClassifiedSillinesses = builder
  .inputRef<any>("SymphonyChartCreateRelationWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutClassifiedSillinesses }),
    }),
  });
