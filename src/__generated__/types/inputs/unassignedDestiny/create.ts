import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutUnassignedDestiny } from "../gravityOverride/createRelationWithoutUnassignedDestiny";
import { ImaginaryFriendCreateRelationWithoutUnassignedDestiny } from "../imaginaryFriend/createRelationWithoutUnassignedDestiny";
import { ReverseTransactionCreateRelationWithoutUnassignedDestiny } from "../reverseTransaction/createRelationWithoutUnassignedDestiny";

export const UnassignedDestinyCreate = builder.inputRef<any>("UnassignedDestinyCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutUnassignedDestiny,
      required: false,
    }),
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
