import { builder } from "src/builder";

import { EchoChamberCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { EchoChamberUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberUpdateRelationWithoutSchrodingerUser = builder.inputRef<any>("EchoChamberUpdateRelationWithoutSchrodingerUser").implement({
  fields: (t) => ({
    connect: t.field({ type: EchoChamberWhereUnique }),
    disconnect: t.field({ type: EchoChamberWhereUnique }),
    create: t.field({ type: EchoChamberCreateWithoutSchrodingerUser }),
    update: t.field({ type: EchoChamberUpdateWithoutSchrodingerUser }),
  }),
});
