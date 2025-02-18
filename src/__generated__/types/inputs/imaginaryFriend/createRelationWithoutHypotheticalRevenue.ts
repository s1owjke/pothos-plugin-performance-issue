import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("ImaginaryFriendCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutHypotheticalRevenue }),
    }),
  });
