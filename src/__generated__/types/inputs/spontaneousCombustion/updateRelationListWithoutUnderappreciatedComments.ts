import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutUnderappreciatedComments } from "./createWithoutUnderappreciatedComments";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationListWithoutUnderappreciatedComments = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationListWithoutUnderappreciatedComments")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      set: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      disconnect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutUnderappreciatedComments] }),
    }),
  });
