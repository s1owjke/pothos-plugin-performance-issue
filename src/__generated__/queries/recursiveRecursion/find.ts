import { builder } from "src/builder";

import { RecursiveRecursionWhereUnique } from "../../types/inputs/recursiveRecursion/whereUnique";
import { RecursiveRecursion } from "../../types/objects/recursiveRecursion";

builder.queryField("recursiveRecursion", (t) =>
  t.prismaField({
    type: RecursiveRecursion,
    nullable: true,
    args: {
      where: t.arg({ type: RecursiveRecursionWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.recursiveRecursion.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
