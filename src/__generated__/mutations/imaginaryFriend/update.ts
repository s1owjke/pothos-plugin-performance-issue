import { builder } from "src/builder";

import { ImaginaryFriendUpdate } from "../../types/inputs/imaginaryFriend/update";
import { ImaginaryFriendWhereUnique } from "../../types/inputs/imaginaryFriend/whereUnique";
import { ImaginaryFriend } from "../../types/objects/imaginaryFriend";

builder.mutationField("imaginaryFriendUpdate", (t) =>
  t.field({
    type: ImaginaryFriend,
    nullable: false,
    args: {
      where: t.arg({ type: ImaginaryFriendWhereUnique, required: true }),
      data: t.arg({ type: ImaginaryFriendUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.imaginaryFriend.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
