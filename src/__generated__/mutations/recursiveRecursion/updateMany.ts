import { builder } from "src/builder";

import { RecursiveRecursionUpdateMany } from "../../types/inputs/recursiveRecursion/updateMany";
import { RecursiveRecursionWhere } from "../../types/inputs/recursiveRecursion/where";

builder.mutationField("recursiveRecursionUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RecursiveRecursionWhere, required: true }),
      data: t.arg({ type: RecursiveRecursionUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.recursiveRecursion.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
