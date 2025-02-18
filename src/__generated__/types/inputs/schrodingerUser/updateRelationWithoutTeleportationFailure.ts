import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutTeleportationFailure } from "./createWithoutTeleportationFailure";
import { SchrodingerUserUpdateWithoutTeleportationFailure } from "./updateWithoutTeleportationFailure";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutTeleportationFailure = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutTeleportationFailure")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutTeleportationFailure }),
      update: t.field({ type: SchrodingerUserUpdateWithoutTeleportationFailure }),
    }),
  });
