import { builder } from "src/builder";

import { SymphonyChartCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { SymphonyChartUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("SymphonyChartUpdateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      disconnect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutSchrodingerUser }),
      update: t.field({ type: SymphonyChartUpdateWithoutSchrodingerUser }),
    }),
  });
