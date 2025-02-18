import { builder } from "src/builder";

import { OverdueRevolutionCreate } from "./create";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionCreateRelation = builder.inputRef<any>("OverdueRevolutionCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: OverdueRevolutionWhereUnique }),
    create: t.field({ type: OverdueRevolutionCreate }),
  }),
});
