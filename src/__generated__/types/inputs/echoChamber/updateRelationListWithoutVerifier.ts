import { builder } from "src/builder";

import { EchoChamberCreateWithoutVerifier } from "./createWithoutVerifier";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberUpdateRelationListWithoutVerifier = builder.inputRef<any>("EchoChamberUpdateRelationListWithoutVerifier").implement({
  fields: (t) => ({
    connect: t.field({ type: [EchoChamberWhereUnique] }),
    set: t.field({ type: [EchoChamberWhereUnique] }),
    disconnect: t.field({ type: [EchoChamberWhereUnique] }),
    create: t.field({ type: [EchoChamberCreateWithoutVerifier] }),
  }),
});
