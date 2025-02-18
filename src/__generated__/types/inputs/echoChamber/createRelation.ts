import { builder } from "src/builder";

import { EchoChamberCreate } from "./create";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberCreateRelation = builder.inputRef<any>("EchoChamberCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: EchoChamberWhereUnique }),
    create: t.field({ type: EchoChamberCreate }),
  }),
});
