import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { ImaginaryFriendUpdateWithoutUnassignedDestiny } from "./updateWithoutUnassignedDestiny";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationWithoutUnassignedDestiny = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutUnassignedDestiny }),
      update: t.field({ type: ImaginaryFriendUpdateWithoutUnassignedDestiny }),
    }),
  });
