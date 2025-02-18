import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutSymphonyChart = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutSymphonyChart }),
    }),
  });
