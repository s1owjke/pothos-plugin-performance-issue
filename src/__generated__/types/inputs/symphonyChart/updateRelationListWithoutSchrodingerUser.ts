import { builder } from "src/builder";

import { SymphonyChartCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutSchrodingerUser] }),
    }),
  });
