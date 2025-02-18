import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDimensionalBackup } from "./createWithoutDimensionalBackup";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutDimensionalBackup = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutDimensionalBackup")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutDimensionalBackup }),
    }),
  });
