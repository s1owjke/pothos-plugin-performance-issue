import { builder } from "src/builder";

import { ImaginaryFriendCreate } from "./create";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelation = builder.inputRef<any>("ImaginaryFriendCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ImaginaryFriendWhereUnique }),
    create: t.field({ type: ImaginaryFriendCreate }),
  }),
});
