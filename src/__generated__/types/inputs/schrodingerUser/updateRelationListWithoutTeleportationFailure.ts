import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutTeleportationFailure } from "./createWithoutTeleportationFailure";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutTeleportationFailure = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutTeleportationFailure")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutTeleportationFailure] }),
    }),
  });
