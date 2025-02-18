import { builder } from "src/builder";

import { UnfinishedPrototypeWhereUnique } from "../../types/inputs/unfinishedPrototype/whereUnique";

builder.mutationField("unfinishedPrototypeDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [UnfinishedPrototypeWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.unfinishedPrototype.delete({ where })));
      return true;
    },
  }),
);
