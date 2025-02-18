import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ImaginaryFriendUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: ImaginaryFriendUpdateWithoutHypotheticalRevenue }),
    }),
  });
