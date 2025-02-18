import { builder } from "src/builder";

import { RecursiveRecursionUpdate } from "../../types/inputs/recursiveRecursion/update";
import { RecursiveRecursionWhereUnique } from "../../types/inputs/recursiveRecursion/whereUnique";
import { RecursiveRecursion } from "../../types/objects/recursiveRecursion";

builder.mutationField("recursiveRecursionUpdateBatch", (t) =>
  t.field({
    type: [RecursiveRecursion],
    nullable: false,
    args: {
      where: t.arg({ type: [RecursiveRecursionWhereUnique], required: true }),
      data: t.arg({ type: [RecursiveRecursionUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.recursiveRecursion.update({ where, data });
        }),
      );
    },
  }),
);
