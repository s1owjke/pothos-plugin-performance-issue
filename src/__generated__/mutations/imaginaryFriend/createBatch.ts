import { builder } from "src/builder";

import { ImaginaryFriendCreate } from "../../types/inputs/imaginaryFriend/create";
import { ImaginaryFriend } from "../../types/objects/imaginaryFriend";

builder.mutationField("imaginaryFriendCreateBatch", (t) =>
  t.field({
    type: [ImaginaryFriend],
    nullable: false,
    args: {
      data: t.arg({ type: [ImaginaryFriendCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.imaginaryFriend.create({ data })));
    },
  }),
);
