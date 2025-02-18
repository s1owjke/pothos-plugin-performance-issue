import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutEchoChamber } from "./createWithoutEchoChamber";
import { SchrodingerUserUpdateWithoutEchoChamber } from "./updateWithoutEchoChamber";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutEchoChamber = builder.inputRef<any>("SchrodingerUserUpdateRelationWithoutEchoChamber").implement({
  fields: (t) => ({
    connect: t.field({ type: SchrodingerUserWhereUnique }),
    disconnect: t.field({ type: SchrodingerUserWhereUnique }),
    create: t.field({ type: SchrodingerUserCreateWithoutEchoChamber }),
    update: t.field({ type: SchrodingerUserUpdateWithoutEchoChamber }),
  }),
});
