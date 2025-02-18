import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { GravityOverrideUpdateWithoutUnassignedDestiny } from "./updateWithoutUnassignedDestiny";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutUnassignedDestiny = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutUnassignedDestiny }),
      update: t.field({ type: GravityOverrideUpdateWithoutUnassignedDestiny }),
    }),
  });
