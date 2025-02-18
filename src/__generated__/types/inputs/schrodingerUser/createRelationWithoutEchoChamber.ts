import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutEchoChamber } from "./createWithoutEchoChamber";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutEchoChamber = builder.inputRef<any>("SchrodingerUserCreateRelationWithoutEchoChamber").implement({
  fields: (t) => ({
    connect: t.field({ type: SchrodingerUserWhereUnique }),
    create: t.field({ type: SchrodingerUserCreateWithoutEchoChamber }),
  }),
});
