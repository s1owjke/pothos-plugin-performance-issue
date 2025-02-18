import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDimensionalBackup } from "./createWithoutDimensionalBackup";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutDimensionalBackup = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutDimensionalBackup")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutDimensionalBackup] }),
    }),
  });
