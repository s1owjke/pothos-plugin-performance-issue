import { builder } from "src/builder";

import { EchoChamberCreate } from "./create";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberCreateRelationList = builder.inputRef<any>("EchoChamberCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [EchoChamberWhereUnique] }),
    create: t.field({ type: [EchoChamberCreate] }),
  }),
});
