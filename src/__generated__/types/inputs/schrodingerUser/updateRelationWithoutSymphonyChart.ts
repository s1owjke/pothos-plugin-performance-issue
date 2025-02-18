import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { SchrodingerUserUpdateWithoutSymphonyChart } from "./updateWithoutSymphonyChart";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutSymphonyChart = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutSymphonyChart }),
      update: t.field({ type: SchrodingerUserUpdateWithoutSymphonyChart }),
    }),
  });
