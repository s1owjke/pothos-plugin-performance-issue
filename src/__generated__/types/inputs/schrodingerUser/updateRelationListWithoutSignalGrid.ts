import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutSignalGrid } from "./createWithoutSignalGrid";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutSignalGrid = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutSignalGrid")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutSignalGrid] }),
    }),
  });
