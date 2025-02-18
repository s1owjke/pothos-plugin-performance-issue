import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutUnassignedDestiny = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutUnassignedDestiny] }),
    }),
  });
