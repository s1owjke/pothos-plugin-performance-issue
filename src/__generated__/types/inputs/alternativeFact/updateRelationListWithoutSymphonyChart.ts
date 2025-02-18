import { builder } from "src/builder";

import { AlternativeFactCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("AlternativeFactUpdateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [AlternativeFactWhereUnique] }),
      set: t.field({ type: [AlternativeFactWhereUnique] }),
      disconnect: t.field({ type: [AlternativeFactWhereUnique] }),
      create: t.field({ type: [AlternativeFactCreateWithoutSymphonyChart] }),
    }),
  });
