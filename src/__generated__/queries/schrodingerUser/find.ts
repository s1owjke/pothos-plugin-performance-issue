import { builder } from "src/builder";

import { SchrodingerUserWhereUnique } from "../../types/inputs/schrodingerUser/whereUnique";
import { SchrodingerUser } from "../../types/objects/schrodingerUser";

builder.queryField("schrodingerUser", (t) =>
  t.prismaField({
    type: SchrodingerUser,
    nullable: true,
    args: {
      where: t.arg({ type: SchrodingerUserWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.schrodingerUser.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
