import { builder } from "src/builder";

import { RecursiveRecursionWhereUnique } from "../../types/inputs/recursiveRecursion/whereUnique";

builder.mutationField("recursiveRecursionDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [RecursiveRecursionWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.recursiveRecursion.delete({ where })));
      return true;
    },
  }),
);
