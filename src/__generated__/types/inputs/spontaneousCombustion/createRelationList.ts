import { builder } from "src/builder";

import { SpontaneousCombustionCreate } from "./create";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationList = builder.inputRef<any>("SpontaneousCombustionCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
    create: t.field({ type: [SpontaneousCombustionCreate] }),
  }),
});
