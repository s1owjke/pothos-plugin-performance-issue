import { builder } from "src/builder";

import { SchrodingerUserUpdate } from "../../types/inputs/schrodingerUser/update";
import { SchrodingerUserWhereUnique } from "../../types/inputs/schrodingerUser/whereUnique";
import { SchrodingerUser } from "../../types/objects/schrodingerUser";

builder.mutationField("schrodingerUserUpdate", (t) =>
  t.field({
    type: SchrodingerUser,
    nullable: false,
    args: {
      where: t.arg({ type: SchrodingerUserWhereUnique, required: true }),
      data: t.arg({ type: SchrodingerUserUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.schrodingerUser.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
