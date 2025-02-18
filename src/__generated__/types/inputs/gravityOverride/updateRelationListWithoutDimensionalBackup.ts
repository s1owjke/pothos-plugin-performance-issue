import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDimensionalBackup } from "./createWithoutDimensionalBackup";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutDimensionalBackup = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutDimensionalBackup")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutDimensionalBackup] }),
    }),
  });
