import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutGhostRecord = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutGhostRecord] }),
    }),
  });
