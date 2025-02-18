import { builder } from "src/builder";

import { RecursiveRecursionWhereUnique } from "../../types/inputs/recursiveRecursion/whereUnique";

builder.mutationField("recursiveRecursionDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: RecursiveRecursionWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.recursiveRecursion.delete({ where: args.where });
      return true;
    },
  }),
);
