import { builder } from "src/builder";

import { RecursiveRecursionWhere } from "../../types/inputs/recursiveRecursion/where";

builder.mutationField("recursiveRecursionDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RecursiveRecursionWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.recursiveRecursion.deleteMany({ where: args.where });
      return count;
    },
  }),
);
