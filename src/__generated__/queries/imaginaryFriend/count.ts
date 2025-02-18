import { builder } from "src/builder";

import { ImaginaryFriendWhere } from "../../types/inputs/imaginaryFriend/where";

builder.queryField("imaginaryFriendCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ImaginaryFriendWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.imaginaryFriend.count({ where: args.where || undefined });
    },
  }),
);
