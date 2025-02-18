import { builder } from "src/builder";

import { SchrodingerUserCreateMany } from "../../types/inputs/schrodingerUser/createMany";

builder.mutationField("schrodingerUserCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [SchrodingerUserCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.schrodingerUser.createMany({ data: args.data });
      return count;
    },
  }),
);
