import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GravityOverrideOrderBy } from "../gravityOverride/orderBy";
import { ImaginaryFriendOrderBy } from "../imaginaryFriend/orderBy";
import { ReverseTransactionOrderBy } from "../reverseTransaction/orderBy";

export const UnassignedDestinyOrderBy = builder.inputRef<any>("UnassignedDestinyOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    gravityOverride: t.field({ type: GravityOverrideOrderBy, required: false }),
    imaginaryFriend: t.field({ type: ImaginaryFriendOrderBy, required: false }),
    reverseTransaction: t.field({ type: ReverseTransactionOrderBy, required: false }),
  }),
});
