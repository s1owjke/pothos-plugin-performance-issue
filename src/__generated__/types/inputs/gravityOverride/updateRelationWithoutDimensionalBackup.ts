import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDimensionalBackup } from "./createWithoutDimensionalBackup";
import { GravityOverrideUpdateWithoutDimensionalBackup } from "./updateWithoutDimensionalBackup";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutDimensionalBackup = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutDimensionalBackup")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutDimensionalBackup }),
      update: t.field({ type: GravityOverrideUpdateWithoutDimensionalBackup }),
    }),
  });
