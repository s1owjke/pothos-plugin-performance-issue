import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutUnassignedDestiny } from "../gravityOverride/createRelationWithoutUnassignedDestiny";
import { ImaginaryFriendCreateRelationWithoutUnassignedDestiny } from "../imaginaryFriend/createRelationWithoutUnassignedDestiny";

export const UnassignedDestinyCreateWithoutReverseTransaction = builder.inputRef<any>("UnassignedDestinyCreateWithoutReverseTransaction").implement({
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
  }),
});
