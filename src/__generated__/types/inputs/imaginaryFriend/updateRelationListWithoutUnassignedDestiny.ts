import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationListWithoutUnassignedDestiny = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationListWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      set: t.field({ type: [ImaginaryFriendWhereUnique] }),
      disconnect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutUnassignedDestiny] }),
    }),
  });
