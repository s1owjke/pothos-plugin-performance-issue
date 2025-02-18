import { builder } from "src/builder";

import { SpontaneousCombustionCreate } from "./create";
import { SpontaneousCombustionUpdate } from "./update";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelation = builder.inputRef<any>("SpontaneousCombustionUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SpontaneousCombustionWhereUnique }),
    disconnect: t.field({ type: SpontaneousCombustionWhereUnique }),
    create: t.field({ type: SpontaneousCombustionCreate }),
    update: t.field({ type: SpontaneousCombustionUpdate }),
  }),
});
