import { builder } from "src/builder";

import { ImaginaryFriendCreate } from "./create";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationList = builder.inputRef<any>("ImaginaryFriendCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
    create: t.field({ type: [ImaginaryFriendCreate] }),
  }),
});
