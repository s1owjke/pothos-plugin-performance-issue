import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnderappreciatedComments } from "./createWithoutUnderappreciatedComments";
import { GravityOverrideUpdateWithoutUnderappreciatedComments } from "./updateWithoutUnderappreciatedComments";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutUnderappreciatedComments = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutUnderappreciatedComments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutUnderappreciatedComments }),
      update: t.field({ type: GravityOverrideUpdateWithoutUnderappreciatedComments }),
    }),
  });
