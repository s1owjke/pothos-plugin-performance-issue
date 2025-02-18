import { builder } from "src/builder";

import { RecursiveRecursionCreate } from "../../types/inputs/recursiveRecursion/create";
import { RecursiveRecursion } from "../../types/objects/recursiveRecursion";

builder.mutationField("recursiveRecursionCreate", (t) =>
  t.field({
    type: RecursiveRecursion,
    nullable: false,
    args: {
      data: t.arg({ type: RecursiveRecursionCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.recursiveRecursion.create({ data: args.data });
    },
  }),
);
