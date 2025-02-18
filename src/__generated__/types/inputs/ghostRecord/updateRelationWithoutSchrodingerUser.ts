import { builder } from "src/builder";

import { GhostRecordCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { GhostRecordUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutSchrodingerUser = builder.inputRef<any>("GhostRecordUpdateRelationWithoutSchrodingerUser").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    disconnect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutSchrodingerUser }),
    update: t.field({ type: GhostRecordUpdateWithoutSchrodingerUser }),
  }),
});
