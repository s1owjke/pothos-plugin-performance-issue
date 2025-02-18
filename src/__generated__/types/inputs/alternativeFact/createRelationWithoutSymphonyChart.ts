import { builder } from "src/builder";

import { AlternativeFactCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelationWithoutSymphonyChart = builder
  .inputRef<any>("AlternativeFactCreateRelationWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: AlternativeFactWhereUnique }),
      create: t.field({ type: AlternativeFactCreateWithoutSymphonyChart }),
    }),
  });
