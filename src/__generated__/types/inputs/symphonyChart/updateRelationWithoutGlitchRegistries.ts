import { builder } from "src/builder";

import { SymphonyChartCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { SymphonyChartUpdateWithoutGlitchRegistries } from "./updateWithoutGlitchRegistries";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutGlitchRegistries = builder
  .inputRef<any>("SymphonyChartUpdateRelationWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      disconnect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutGlitchRegistries }),
      update: t.field({ type: SymphonyChartUpdateWithoutGlitchRegistries }),
    }),
  });
