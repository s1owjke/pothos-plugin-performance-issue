import { builder } from "src/builder";

import { SymphonyChartCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("SymphonyChartCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutSchrodingerUser] }),
    }),
  });
