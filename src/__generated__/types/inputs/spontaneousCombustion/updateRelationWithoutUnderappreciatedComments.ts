import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutUnderappreciatedComments } from "./createWithoutUnderappreciatedComments";
import { SpontaneousCombustionUpdateWithoutUnderappreciatedComments } from "./updateWithoutUnderappreciatedComments";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationWithoutUnderappreciatedComments = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationWithoutUnderappreciatedComments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      disconnect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutUnderappreciatedComments }),
      update: t.field({ type: SpontaneousCombustionUpdateWithoutUnderappreciatedComments }),
    }),
  });
