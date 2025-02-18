import { builder } from "src/builder";

import { UnfinishedSymphonyWhereUnique } from "../../types/inputs/unfinishedSymphony/whereUnique";

builder.mutationField("unfinishedSymphonyDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedSymphonyWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.unfinishedSymphony.delete({ where: args.where });
      return true;
    },
  }),
);
