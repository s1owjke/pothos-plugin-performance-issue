import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { SchrodingerUserUpdateWithoutGhostRecord } from "./updateWithoutGhostRecord";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutGhostRecord = builder.inputRef<any>("SchrodingerUserUpdateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: SchrodingerUserWhereUnique }),
    disconnect: t.field({ type: SchrodingerUserWhereUnique }),
    create: t.field({ type: SchrodingerUserCreateWithoutGhostRecord }),
    update: t.field({ type: SchrodingerUserUpdateWithoutGhostRecord }),
  }),
});
