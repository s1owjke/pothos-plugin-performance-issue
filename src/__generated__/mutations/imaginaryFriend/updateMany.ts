import { builder } from "src/builder";

import { ImaginaryFriendUpdateMany } from "../../types/inputs/imaginaryFriend/updateMany";
import { ImaginaryFriendWhere } from "../../types/inputs/imaginaryFriend/where";

builder.mutationField("imaginaryFriendUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ImaginaryFriendWhere, required: true }),
      data: t.arg({ type: ImaginaryFriendUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.imaginaryFriend.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
