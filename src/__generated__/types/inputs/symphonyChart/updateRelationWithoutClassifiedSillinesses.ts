import { builder } from "src/builder";

import { SymphonyChartCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { SymphonyChartUpdateWithoutClassifiedSillinesses } from "./updateWithoutClassifiedSillinesses";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutClassifiedSillinesses = builder
  .inputRef<any>("SymphonyChartUpdateRelationWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      disconnect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutClassifiedSillinesses }),
      update: t.field({ type: SymphonyChartUpdateWithoutClassifiedSillinesses }),
    }),
  });
