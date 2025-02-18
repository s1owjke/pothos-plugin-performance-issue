import { builder } from "src/builder";

import { SchrodingerUserWhereUnique } from "../../types/inputs/schrodingerUser/whereUnique";

builder.mutationField("schrodingerUserDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [SchrodingerUserWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.schrodingerUser.delete({ where })));
      return true;
    },
  }),
);
