import { builder } from "src/builder";

import { HalfBakedIdeaCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaCreateRelationWithoutSymphonyChart = builder.inputRef<any>("HalfBakedIdeaCreateRelationWithoutSymphonyChart").implement({
  fields: (t) => ({
    connect: t.field({ type: HalfBakedIdeaWhereUnique }),
    create: t.field({ type: HalfBakedIdeaCreateWithoutSymphonyChart }),
  }),
});
