import { builder } from "src/builder";

import { UnfinishedSymphonyWhereUnique } from "../../types/inputs/unfinishedSymphony/whereUnique";

builder.mutationField("unfinishedSymphonyDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [UnfinishedSymphonyWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.unfinishedSymphony.delete({ where })));
      return true;
    },
  }),
);
