import { builder } from "src/builder";

import { SchrodingerUserWhere } from "../../types/inputs/schrodingerUser/where";

builder.mutationField("schrodingerUserDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SchrodingerUserWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.schrodingerUser.deleteMany({ where: args.where });
      return count;
    },
  }),
);
