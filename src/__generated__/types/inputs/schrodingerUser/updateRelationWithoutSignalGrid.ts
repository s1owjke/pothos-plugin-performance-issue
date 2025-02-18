import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutSignalGrid } from "./createWithoutSignalGrid";
import { SchrodingerUserUpdateWithoutSignalGrid } from "./updateWithoutSignalGrid";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutSignalGrid = builder.inputRef<any>("SchrodingerUserUpdateRelationWithoutSignalGrid").implement({
  fields: (t) => ({
    connect: t.field({ type: SchrodingerUserWhereUnique }),
    disconnect: t.field({ type: SchrodingerUserWhereUnique }),
    create: t.field({ type: SchrodingerUserCreateWithoutSignalGrid }),
    update: t.field({ type: SchrodingerUserUpdateWithoutSignalGrid }),
  }),
});
