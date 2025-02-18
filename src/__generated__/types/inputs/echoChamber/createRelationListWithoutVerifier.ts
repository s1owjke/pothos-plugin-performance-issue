import { builder } from "src/builder";

import { EchoChamberCreateWithoutVerifier } from "./createWithoutVerifier";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberCreateRelationListWithoutVerifier = builder.inputRef<any>("EchoChamberCreateRelationListWithoutVerifier").implement({
  fields: (t) => ({
    connect: t.field({ type: [EchoChamberWhereUnique] }),
    create: t.field({ type: [EchoChamberCreateWithoutVerifier] }),
  }),
});
