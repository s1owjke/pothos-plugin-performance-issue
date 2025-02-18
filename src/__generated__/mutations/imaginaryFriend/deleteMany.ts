import { builder } from "src/builder";

import { ImaginaryFriendWhere } from "../../types/inputs/imaginaryFriend/where";

builder.mutationField("imaginaryFriendDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ImaginaryFriendWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.imaginaryFriend.deleteMany({ where: args.where });
      return count;
    },
  }),
);
