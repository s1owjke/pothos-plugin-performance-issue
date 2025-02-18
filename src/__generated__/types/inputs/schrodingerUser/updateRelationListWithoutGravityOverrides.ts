import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutGravityOverrides] }),
    }),
  });
