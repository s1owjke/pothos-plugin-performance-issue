import { builder } from "src/builder";

import { RecursiveRecursionUpdate } from "../../types/inputs/recursiveRecursion/update";
import { RecursiveRecursionWhereUnique } from "../../types/inputs/recursiveRecursion/whereUnique";
import { RecursiveRecursion } from "../../types/objects/recursiveRecursion";

builder.mutationField("recursiveRecursionUpdate", (t) =>
  t.field({
    type: RecursiveRecursion,
    nullable: false,
    args: {
      where: t.arg({ type: RecursiveRecursionWhereUnique, required: true }),
      data: t.arg({ type: RecursiveRecursionUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.recursiveRecursion.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
