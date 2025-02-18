import { builder } from "src/builder";

import { SymphonyChartCreate } from "./create";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelation = builder.inputRef<any>("SymphonyChartCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SymphonyChartWhereUnique }),
    create: t.field({ type: SymphonyChartCreate }),
  }),
});
