import { builder } from "src/builder";

import { SpontaneousCombustionWhereUnique } from "../../types/inputs/spontaneousCombustion/whereUnique";

builder.mutationField("spontaneousCombustionDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [SpontaneousCombustionWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.spontaneousCombustion.delete({ where })));
      return true;
    },
  }),
);
