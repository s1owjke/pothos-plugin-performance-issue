import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutSignalGrid } from "./createWithoutSignalGrid";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutSignalGrid = builder.inputRef<any>("SchrodingerUserCreateRelationWithoutSignalGrid").implement({
  fields: (t) => ({
    connect: t.field({ type: SchrodingerUserWhereUnique }),
    create: t.field({ type: SchrodingerUserCreateWithoutSignalGrid }),
  }),
});
