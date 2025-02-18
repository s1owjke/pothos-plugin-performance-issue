import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutUnassignedDestiny } from "../gravityOverride/createRelationWithoutUnassignedDestiny";
import { ReverseTransactionCreateRelationWithoutUnassignedDestiny } from "../reverseTransaction/createRelationWithoutUnassignedDestiny";

export const UnassignedDestinyCreateWithoutImaginaryFriend = builder.inputRef<any>("UnassignedDestinyCreateWithoutImaginaryFriend").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutUnassignedDestiny,
      required: false,
    }),
    reverseTransaction: t.field({
      type: ReverseTransactionCreateRelationWithoutUnassignedDestiny,
      required: false,
    }),
  }),
});
