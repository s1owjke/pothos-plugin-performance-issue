import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutUnassignedDestiny = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutUnassignedDestiny }),
    }),
  });
