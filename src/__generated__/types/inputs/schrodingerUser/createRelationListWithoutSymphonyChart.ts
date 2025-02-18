import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutSymphonyChart] }),
    }),
  });
