import { builder } from "src/builder";

import { SpontaneousCombustionCreate } from "./create";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelation = builder.inputRef<any>("SpontaneousCombustionCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SpontaneousCombustionWhereUnique }),
    create: t.field({ type: SpontaneousCombustionCreate }),
  }),
});
