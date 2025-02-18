import { builder } from "src/builder";

import { SchrodingerUserCreate } from "./create";
import { SchrodingerUserUpdate } from "./update";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelation = builder.inputRef<any>("SchrodingerUserUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SchrodingerUserWhereUnique }),
    disconnect: t.field({ type: SchrodingerUserWhereUnique }),
    create: t.field({ type: SchrodingerUserCreate }),
    update: t.field({ type: SchrodingerUserUpdate }),
  }),
});
