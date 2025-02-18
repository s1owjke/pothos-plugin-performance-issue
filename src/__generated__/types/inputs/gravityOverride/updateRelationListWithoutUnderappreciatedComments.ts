import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnderappreciatedComments } from "./createWithoutUnderappreciatedComments";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutUnderappreciatedComments = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutUnderappreciatedComments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutUnderappreciatedComments] }),
    }),
  });
