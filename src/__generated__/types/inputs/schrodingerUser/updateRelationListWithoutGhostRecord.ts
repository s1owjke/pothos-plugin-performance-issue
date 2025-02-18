import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutGhostRecord = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutGhostRecord] }),
    }),
  });
