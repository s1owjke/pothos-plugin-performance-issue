import { builder } from "src/builder";

import { ImaginaryFriendWhereUnique } from "../../types/inputs/imaginaryFriend/whereUnique";
import { ImaginaryFriend } from "../../types/objects/imaginaryFriend";

builder.queryField("imaginaryFriend", (t) =>
  t.prismaField({
    type: ImaginaryFriend,
    nullable: true,
    args: {
      where: t.arg({ type: ImaginaryFriendWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.imaginaryFriend.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
