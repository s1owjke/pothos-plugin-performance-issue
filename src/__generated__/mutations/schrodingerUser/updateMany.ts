import { builder } from "src/builder";

import { SchrodingerUserUpdateMany } from "../../types/inputs/schrodingerUser/updateMany";
import { SchrodingerUserWhere } from "../../types/inputs/schrodingerUser/where";

builder.mutationField("schrodingerUserUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SchrodingerUserWhere, required: true }),
      data: t.arg({ type: SchrodingerUserUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.schrodingerUser.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
