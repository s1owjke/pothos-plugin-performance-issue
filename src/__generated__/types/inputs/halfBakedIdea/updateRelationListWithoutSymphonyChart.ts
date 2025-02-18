import { builder } from "src/builder";

import { HalfBakedIdeaCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaUpdateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("HalfBakedIdeaUpdateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
      set: t.field({ type: [HalfBakedIdeaWhereUnique] }),
      disconnect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
      create: t.field({ type: [HalfBakedIdeaCreateWithoutSymphonyChart] }),
    }),
  });
