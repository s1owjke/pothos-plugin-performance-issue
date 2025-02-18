import { builder } from "src/builder";

import { ImaginaryFriendUpdate } from "../../types/inputs/imaginaryFriend/update";
import { ImaginaryFriendWhereUnique } from "../../types/inputs/imaginaryFriend/whereUnique";
import { ImaginaryFriend } from "../../types/objects/imaginaryFriend";

builder.mutationField("imaginaryFriendUpdateBatch", (t) =>
  t.field({
    type: [ImaginaryFriend],
    nullable: false,
    args: {
      where: t.arg({ type: [ImaginaryFriendWhereUnique], required: true }),
      data: t.arg({ type: [ImaginaryFriendUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.imaginaryFriend.update({ where, data });
        }),
      );
    },
  }),
);
