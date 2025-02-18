import { builder } from "src/builder";

import { HalfBakedIdeaCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { HalfBakedIdeaUpdateWithoutSymphonyChart } from "./updateWithoutSymphonyChart";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaUpdateRelationWithoutSymphonyChart = builder.inputRef<any>("HalfBakedIdeaUpdateRelationWithoutSymphonyChart").implement({
  fields: (t) => ({
    connect: t.field({ type: HalfBakedIdeaWhereUnique }),
    disconnect: t.field({ type: HalfBakedIdeaWhereUnique }),
    create: t.field({ type: HalfBakedIdeaCreateWithoutSymphonyChart }),
    update: t.field({ type: HalfBakedIdeaUpdateWithoutSymphonyChart }),
  }),
});
