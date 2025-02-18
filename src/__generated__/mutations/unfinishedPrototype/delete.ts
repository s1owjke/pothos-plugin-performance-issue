import { builder } from "src/builder";

import { UnfinishedPrototypeWhereUnique } from "../../types/inputs/unfinishedPrototype/whereUnique";

builder.mutationField("unfinishedPrototypeDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedPrototypeWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.unfinishedPrototype.delete({ where: args.where });
      return true;
    },
  }),
);
