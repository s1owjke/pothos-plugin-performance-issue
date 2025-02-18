import { builder } from "src/builder";

import { SchrodingerUserCreate } from "./create";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationList = builder.inputRef<any>("SchrodingerUserUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SchrodingerUserWhereUnique] }),
    set: t.field({ type: [SchrodingerUserWhereUnique] }),
    disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
    create: t.field({ type: [SchrodingerUserCreate] }),
  }),
});
