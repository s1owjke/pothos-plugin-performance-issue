import { builder } from "src/builder";

import { RecursiveRecursionCreateMany } from "../../types/inputs/recursiveRecursion/createMany";

builder.mutationField("recursiveRecursionCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [RecursiveRecursionCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.recursiveRecursion.createMany({ data: args.data });
      return count;
    },
  }),
);
