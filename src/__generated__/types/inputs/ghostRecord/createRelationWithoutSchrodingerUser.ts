import { builder } from "src/builder";

import { GhostRecordCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutSchrodingerUser = builder.inputRef<any>("GhostRecordCreateRelationWithoutSchrodingerUser").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutSchrodingerUser }),
  }),
});
