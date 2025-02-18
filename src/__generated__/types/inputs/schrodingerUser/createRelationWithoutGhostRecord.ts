import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutGhostRecord = builder.inputRef<any>("SchrodingerUserCreateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: SchrodingerUserWhereUnique }),
    create: t.field({ type: SchrodingerUserCreateWithoutGhostRecord }),
  }),
});
