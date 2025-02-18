import { builder } from "src/builder";

import { ImaginaryFriendWhereUnique } from "../../types/inputs/imaginaryFriend/whereUnique";

builder.mutationField("imaginaryFriendDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ImaginaryFriendWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.imaginaryFriend.delete({ where })));
      return true;
    },
  }),
);
