import { builder } from "src/builder";

import { ImaginaryFriendWhere } from "./where";

export const ImaginaryFriendWhereRelationList = builder.inputRef<any>("ImaginaryFriendWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ImaginaryFriendWhere, required: false }),
    every: t.field({ type: ImaginaryFriendWhere, required: false }),
    none: t.field({ type: ImaginaryFriendWhere, required: false }),
  }),
});
