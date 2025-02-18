import { builder } from "src/builder";

import { ImaginaryFriendCreate } from "./create";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationList = builder.inputRef<any>("ImaginaryFriendUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
    set: t.field({ type: [ImaginaryFriendWhereUnique] }),
    disconnect: t.field({ type: [ImaginaryFriendWhereUnique] }),
    create: t.field({ type: [ImaginaryFriendCreate] }),
  }),
});
