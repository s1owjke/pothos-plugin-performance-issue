import { builder } from "src/builder";

import { SchrodingerUserUpdate } from "../../types/inputs/schrodingerUser/update";
import { SchrodingerUserWhereUnique } from "../../types/inputs/schrodingerUser/whereUnique";
import { SchrodingerUser } from "../../types/objects/schrodingerUser";

builder.mutationField("schrodingerUserUpdateBatch", (t) =>
  t.field({
    type: [SchrodingerUser],
    nullable: false,
    args: {
      where: t.arg({ type: [SchrodingerUserWhereUnique], required: true }),
      data: t.arg({ type: [SchrodingerUserUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.schrodingerUser.update({ where, data });
        }),
      );
    },
  }),
);
