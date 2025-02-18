import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";
import { ImaginaryFriendWhere } from "../imaginaryFriend/where";
import { ReverseTransactionWhere } from "../reverseTransaction/where";

export const UnassignedDestinyWhere = builder.inputRef<any>("UnassignedDestinyWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    imaginaryFriend: t.field({ type: ImaginaryFriendWhere, required: false }),
    reverseTransaction: t.field({ type: ReverseTransactionWhere, required: false }),
    AND: t.field({ type: [UnassignedDestinyWhere], required: false }),
    OR: t.field({ type: [UnassignedDestinyWhere], required: false }),
    NOT: t.field({ type: [UnassignedDestinyWhere], required: false }),
  }),
});
