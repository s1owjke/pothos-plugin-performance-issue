import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutUnassignedDestiny } from "../gravityOverride/updateRelationWithoutUnassignedDestiny";
import { ImaginaryFriendUpdateRelationWithoutUnassignedDestiny } from "../imaginaryFriend/updateRelationWithoutUnassignedDestiny";

export const UnassignedDestinyUpdateWithoutReverseTransaction = builder.inputRef<any>("UnassignedDestinyUpdateWithoutReverseTransaction").implement({
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
  }),
});
