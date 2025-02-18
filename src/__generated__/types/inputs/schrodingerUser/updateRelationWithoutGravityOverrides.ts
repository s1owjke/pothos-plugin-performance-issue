import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { SchrodingerUserUpdateWithoutGravityOverrides } from "./updateWithoutGravityOverrides";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutGravityOverrides = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutGravityOverrides }),
      update: t.field({ type: SchrodingerUserUpdateWithoutGravityOverrides }),
    }),
  });
