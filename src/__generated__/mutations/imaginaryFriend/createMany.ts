import { builder } from "src/builder";

import { ImaginaryFriendCreateMany } from "../../types/inputs/imaginaryFriend/createMany";

builder.mutationField("imaginaryFriendCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ImaginaryFriendCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.imaginaryFriend.createMany({ data: args.data });
      return count;
    },
  }),
);
