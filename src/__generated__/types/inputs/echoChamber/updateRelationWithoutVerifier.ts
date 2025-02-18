import { builder } from "src/builder";

import { EchoChamberCreateWithoutVerifier } from "./createWithoutVerifier";
import { EchoChamberUpdateWithoutVerifier } from "./updateWithoutVerifier";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberUpdateRelationWithoutVerifier = builder.inputRef<any>("EchoChamberUpdateRelationWithoutVerifier").implement({
  fields: (t) => ({
    connect: t.field({ type: EchoChamberWhereUnique }),
    disconnect: t.field({ type: EchoChamberWhereUnique }),
    create: t.field({ type: EchoChamberCreateWithoutVerifier }),
    update: t.field({ type: EchoChamberUpdateWithoutVerifier }),
  }),
});
