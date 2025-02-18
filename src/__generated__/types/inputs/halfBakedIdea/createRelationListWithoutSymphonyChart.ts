import { builder } from "src/builder";

import { HalfBakedIdeaCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaCreateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("HalfBakedIdeaCreateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
      create: t.field({ type: [HalfBakedIdeaCreateWithoutSymphonyChart] }),
    }),
  });
