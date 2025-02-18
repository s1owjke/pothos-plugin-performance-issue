import { builder } from "src/builder";

import { ImaginaryFriendCreate } from "../../types/inputs/imaginaryFriend/create";
import { ImaginaryFriend } from "../../types/objects/imaginaryFriend";

builder.mutationField("imaginaryFriendCreate", (t) =>
  t.field({
    type: ImaginaryFriend,
    nullable: false,
    args: {
      data: t.arg({ type: ImaginaryFriendCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.imaginaryFriend.create({ data: args.data });
    },
  }),
);
