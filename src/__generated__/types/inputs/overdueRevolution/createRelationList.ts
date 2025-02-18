import { builder } from "src/builder";

import { OverdueRevolutionCreate } from "./create";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionCreateRelationList = builder.inputRef<any>("OverdueRevolutionCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [OverdueRevolutionWhereUnique] }),
    create: t.field({ type: [OverdueRevolutionCreate] }),
  }),
});
