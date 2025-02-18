import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutGravityOverrides] }),
    }),
  });
