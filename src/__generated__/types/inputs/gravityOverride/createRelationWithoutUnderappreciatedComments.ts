import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnderappreciatedComments } from "./createWithoutUnderappreciatedComments";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutUnderappreciatedComments = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutUnderappreciatedComments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutUnderappreciatedComments }),
    }),
  });
