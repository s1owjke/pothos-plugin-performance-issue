import { builder } from "src/builder";

import { SymphonyChartCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutGlitchRegistries = builder
  .inputRef<any>("SymphonyChartCreateRelationWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutGlitchRegistries }),
    }),
  });
