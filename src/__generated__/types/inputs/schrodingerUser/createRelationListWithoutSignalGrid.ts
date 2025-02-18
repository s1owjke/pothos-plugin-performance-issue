import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutSignalGrid } from "./createWithoutSignalGrid";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutSignalGrid = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutSignalGrid")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutSignalGrid] }),
    }),
  });
