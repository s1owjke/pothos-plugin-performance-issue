import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutUnassignedDestiny } from "../gravityOverride/updateRelationWithoutUnassignedDestiny";
import { ReverseTransactionUpdateRelationWithoutUnassignedDestiny } from "../reverseTransaction/updateRelationWithoutUnassignedDestiny";

export const UnassignedDestinyUpdateWithoutImaginaryFriend = builder.inputRef<any>("UnassignedDestinyUpdateWithoutImaginaryFriend").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutUnassignedDestiny,
      required: false,
    }),
    reverseTransaction: t.field({
      type: ReverseTransactionUpdateRelationWithoutUnassignedDestiny,
      required: false,
    }),
  }),
});
