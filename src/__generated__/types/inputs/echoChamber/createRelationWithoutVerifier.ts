import { builder } from "src/builder";

import { EchoChamberCreateWithoutVerifier } from "./createWithoutVerifier";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberCreateRelationWithoutVerifier = builder.inputRef<any>("EchoChamberCreateRelationWithoutVerifier").implement({
  fields: (t) => ({
    connect: t.field({ type: EchoChamberWhereUnique }),
    create: t.field({ type: EchoChamberCreateWithoutVerifier }),
  }),
});
