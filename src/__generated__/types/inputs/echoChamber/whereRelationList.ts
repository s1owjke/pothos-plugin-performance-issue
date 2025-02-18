import { builder } from "src/builder";

import { EchoChamberWhere } from "./where";

export const EchoChamberWhereRelationList = builder.inputRef<any>("EchoChamberWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: EchoChamberWhere, required: false }),
    every: t.field({ type: EchoChamberWhere, required: false }),
    none: t.field({ type: EchoChamberWhere, required: false }),
  }),
});
