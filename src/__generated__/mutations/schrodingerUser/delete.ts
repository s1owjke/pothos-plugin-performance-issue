import { builder } from "src/builder";

import { SchrodingerUserWhereUnique } from "../../types/inputs/schrodingerUser/whereUnique";

builder.mutationField("schrodingerUserDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: SchrodingerUserWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.schrodingerUser.delete({ where: args.where });
      return true;
    },
  }),
);
