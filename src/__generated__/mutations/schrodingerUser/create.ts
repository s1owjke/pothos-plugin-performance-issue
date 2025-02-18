import { builder } from "src/builder";

import { SchrodingerUserCreate } from "../../types/inputs/schrodingerUser/create";
import { SchrodingerUser } from "../../types/objects/schrodingerUser";

builder.mutationField("schrodingerUserCreate", (t) =>
  t.field({
    type: SchrodingerUser,
    nullable: false,
    args: {
      data: t.arg({ type: SchrodingerUserCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.schrodingerUser.create({ data: args.data });
    },
  }),
);
