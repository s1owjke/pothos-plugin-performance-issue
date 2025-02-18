import { builder } from "src/builder";

import { OverdueRevolutionCreate } from "./create";
import { OverdueRevolutionUpdate } from "./update";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionUpdateRelation = builder.inputRef<any>("OverdueRevolutionUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: OverdueRevolutionWhereUnique }),
    disconnect: t.field({ type: OverdueRevolutionWhereUnique }),
    create: t.field({ type: OverdueRevolutionCreate }),
    update: t.field({ type: OverdueRevolutionUpdate }),
  }),
});
