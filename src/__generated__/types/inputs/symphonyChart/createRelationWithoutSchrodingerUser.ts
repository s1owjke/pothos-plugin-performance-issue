import { builder } from "src/builder";

import { SymphonyChartCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("SymphonyChartCreateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutSchrodingerUser }),
    }),
  });
