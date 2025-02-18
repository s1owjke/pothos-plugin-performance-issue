import { builder } from "src/builder";

import { GhostRecordCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("GhostRecordUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      set: t.field({ type: [GhostRecordWhereUnique] }),
      disconnect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutSchrodingerUser] }),
    }),
  });
