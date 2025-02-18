import { builder } from "src/builder";

import { SpontaneousCombustionCreate } from "./create";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationList = builder.inputRef<any>("SpontaneousCombustionUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
    set: t.field({ type: [SpontaneousCombustionWhereUnique] }),
    disconnect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
    create: t.field({ type: [SpontaneousCombustionCreate] }),
  }),
});
