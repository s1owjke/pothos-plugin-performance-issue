import { builder } from "src/builder";

import { GhostRecordCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("GhostRecordCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutSchrodingerUser] }),
    }),
  });
