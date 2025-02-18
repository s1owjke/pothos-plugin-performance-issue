import { builder } from "src/builder";

import { ImaginaryFriendWhereUnique } from "../../types/inputs/imaginaryFriend/whereUnique";

builder.mutationField("imaginaryFriendDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ImaginaryFriendWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.imaginaryFriend.delete({ where: args.where });
      return true;
    },
  }),
);
