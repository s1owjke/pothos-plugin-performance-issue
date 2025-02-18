import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutSymphonyChart] }),
    }),
  });
