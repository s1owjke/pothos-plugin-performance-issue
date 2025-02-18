import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutTeleportationFailure } from "./createWithoutTeleportationFailure";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutTeleportationFailure = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutTeleportationFailure")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutTeleportationFailure] }),
    }),
  });
