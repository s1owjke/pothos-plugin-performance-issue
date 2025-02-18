import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutGravityOverrides = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutGravityOverrides }),
    }),
  });
