import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutUnderappreciatedComments } from "./createWithoutUnderappreciatedComments";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationWithoutUnderappreciatedComments = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationWithoutUnderappreciatedComments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutUnderappreciatedComments }),
    }),
  });
