import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutUnassignedDestiny } from "../gravityOverride/updateRelationWithoutUnassignedDestiny";
import { ImaginaryFriendUpdateRelationWithoutUnassignedDestiny } from "../imaginaryFriend/updateRelationWithoutUnassignedDestiny";
import { ReverseTransactionUpdateRelationWithoutUnassignedDestiny } from "../reverseTransaction/updateRelationWithoutUnassignedDestiny";

export const UnassignedDestinyUpdate = builder.inputRef<any>("UnassignedDestinyUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutUnassignedDestiny,
      required: false,
    }),
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
