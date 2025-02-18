import { builder } from "src/builder";

import { UnfinishedSymphonyWhere } from "../../types/inputs/unfinishedSymphony/where";

builder.mutationField("unfinishedSymphonyDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedSymphonyWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unfinishedSymphony.deleteMany({ where: args.where });
      return count;
    },
  }),
);
