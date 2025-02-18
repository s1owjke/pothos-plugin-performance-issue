import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutTeleportationFailure } from "./createWithoutTeleportationFailure";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutTeleportationFailure = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutTeleportationFailure")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutTeleportationFailure }),
    }),
  });
