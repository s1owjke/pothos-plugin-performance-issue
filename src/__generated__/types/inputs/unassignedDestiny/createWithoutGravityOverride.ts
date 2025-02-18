import { builder } from "src/builder";

import { ImaginaryFriendCreateRelationWithoutUnassignedDestiny } from "../imaginaryFriend/createRelationWithoutUnassignedDestiny";
import { ReverseTransactionCreateRelationWithoutUnassignedDestiny } from "../reverseTransaction/createRelationWithoutUnassignedDestiny";

export const UnassignedDestinyCreateWithoutGravityOverride = builder.inputRef<any>("UnassignedDestinyCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    imaginaryFriend: t.field({
      type: ImaginaryFriendCreateRelationWithoutUnassignedDestiny,
      required: false,
    }),
    reverseTransaction: t.field({
      type: ReverseTransactionCreateRelationWithoutUnassignedDestiny,
      required: false,
    }),
  }),
});
