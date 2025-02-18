import { builder } from "src/builder";

import { AlternativeFactCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("AlternativeFactCreateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [AlternativeFactWhereUnique] }),
      create: t.field({ type: [AlternativeFactCreateWithoutSymphonyChart] }),
    }),
  });
