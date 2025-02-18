import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      set: t.field({ type: [ImaginaryFriendWhereUnique] }),
      disconnect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutHypotheticalRevenue] }),
    }),
  });
