import { builder } from "src/builder";

import { AlternativeFactCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { AlternativeFactUpdateWithoutSymphonyChart } from "./updateWithoutSymphonyChart";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationWithoutSymphonyChart = builder
  .inputRef<any>("AlternativeFactUpdateRelationWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: AlternativeFactWhereUnique }),
      disconnect: t.field({ type: AlternativeFactWhereUnique }),
      create: t.field({ type: AlternativeFactCreateWithoutSymphonyChart }),
      update: t.field({ type: AlternativeFactUpdateWithoutSymphonyChart }),
    }),
  });
