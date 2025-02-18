import { builder } from "src/builder";

import { HyperlinkedUnicornWhereUnique } from "../../types/inputs/hyperlinkedUnicorn/whereUnique";

builder.mutationField("hyperlinkedUnicornDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: HyperlinkedUnicornWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.hyperlinkedUnicorn.delete({ where: args.where });
      return true;
    },
  }),
);
