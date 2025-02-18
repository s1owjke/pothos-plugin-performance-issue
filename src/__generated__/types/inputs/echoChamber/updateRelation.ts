import { builder } from "src/builder";

import { EchoChamberCreate } from "./create";
import { EchoChamberUpdate } from "./update";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberUpdateRelation = builder.inputRef<any>("EchoChamberUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: EchoChamberWhereUnique }),
    disconnect: t.field({ type: EchoChamberWhereUnique }),
    create: t.field({ type: EchoChamberCreate }),
    update: t.field({ type: EchoChamberUpdate }),
  }),
});
