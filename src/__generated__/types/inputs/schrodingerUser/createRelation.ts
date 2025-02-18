import { builder } from "src/builder";

import { SchrodingerUserCreate } from "./create";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelation = builder.inputRef<any>("SchrodingerUserCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SchrodingerUserWhereUnique }),
    create: t.field({ type: SchrodingerUserCreate }),
  }),
});
