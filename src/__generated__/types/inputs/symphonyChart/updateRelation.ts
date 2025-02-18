import { builder } from "src/builder";

import { SymphonyChartCreate } from "./create";
import { SymphonyChartUpdate } from "./update";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelation = builder.inputRef<any>("SymphonyChartUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SymphonyChartWhereUnique }),
    disconnect: t.field({ type: SymphonyChartWhereUnique }),
    create: t.field({ type: SymphonyChartCreate }),
    update: t.field({ type: SymphonyChartUpdate }),
  }),
});
