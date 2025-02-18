import { builder } from "src/builder";

import { ImaginaryFriendUpdateRelationWithoutUnassignedDestiny } from "../imaginaryFriend/updateRelationWithoutUnassignedDestiny";
import { ReverseTransactionUpdateRelationWithoutUnassignedDestiny } from "../reverseTransaction/updateRelationWithoutUnassignedDestiny";

export const UnassignedDestinyUpdateWithoutGravityOverride = builder.inputRef<any>("UnassignedDestinyUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    imaginaryFriend: t.field({
      type: ImaginaryFriendUpdateRelationWithoutUnassignedDestiny,
      required: false,
    }),
    reverseTransaction: t.field({
      type: ReverseTransactionUpdateRelationWithoutUnassignedDestiny,
      required: false,
    }),
  }),
});
