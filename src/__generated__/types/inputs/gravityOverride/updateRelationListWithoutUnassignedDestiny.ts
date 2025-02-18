import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutUnassignedDestiny = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutUnassignedDestiny] }),
    }),
  });
