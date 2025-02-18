import { builder } from "src/builder";

import { HyperlinkedUnicornWhereUnique } from "../../types/inputs/hyperlinkedUnicorn/whereUnique";

builder.mutationField("hyperlinkedUnicornDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [HyperlinkedUnicornWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.hyperlinkedUnicorn.delete({ where })));
      return true;
    },
  }),
);
