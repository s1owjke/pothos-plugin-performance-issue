import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutUnderappreciatedComments } from "./createWithoutUnderappreciatedComments";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationListWithoutUnderappreciatedComments = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationListWithoutUnderappreciatedComments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutUnderappreciatedComments] }),
    }),
  });
