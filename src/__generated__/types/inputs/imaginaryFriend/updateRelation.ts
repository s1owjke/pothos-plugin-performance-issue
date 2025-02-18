import { builder } from "src/builder";

import { ImaginaryFriendCreate } from "./create";
import { ImaginaryFriendUpdate } from "./update";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelation = builder.inputRef<any>("ImaginaryFriendUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ImaginaryFriendWhereUnique }),
    disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
    create: t.field({ type: ImaginaryFriendCreate }),
    update: t.field({ type: ImaginaryFriendUpdate }),
  }),
});
