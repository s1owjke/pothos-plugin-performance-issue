import { builder } from "src/builder";

import { EchoChamberCreate } from "./create";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberUpdateRelationList = builder.inputRef<any>("EchoChamberUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [EchoChamberWhereUnique] }),
    set: t.field({ type: [EchoChamberWhereUnique] }),
    disconnect: t.field({ type: [EchoChamberWhereUnique] }),
    create: t.field({ type: [EchoChamberCreate] }),
  }),
});
