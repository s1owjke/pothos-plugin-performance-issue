import { builder } from "src/builder";

import { OverdueRevolutionCreate } from "./create";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionUpdateRelationList = builder.inputRef<any>("OverdueRevolutionUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [OverdueRevolutionWhereUnique] }),
    set: t.field({ type: [OverdueRevolutionWhereUnique] }),
    disconnect: t.field({ type: [OverdueRevolutionWhereUnique] }),
    create: t.field({ type: [OverdueRevolutionCreate] }),
  }),
});
