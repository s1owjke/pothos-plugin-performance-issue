import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationListWithoutUnassignedDestiny = builder
  .inputRef<any>("ImaginaryFriendCreateRelationListWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutUnassignedDestiny] }),
    }),
  });
