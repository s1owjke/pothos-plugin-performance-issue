import { builder } from "src/builder";

export const ImaginaryFriendWhereUnique = builder.inputRef<any>("ImaginaryFriendWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    unassignedDestinyId: t.field({ type: "ID", required: false }),
  }),
});
