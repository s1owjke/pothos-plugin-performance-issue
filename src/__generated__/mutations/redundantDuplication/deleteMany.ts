import { builder } from "src/builder";

import { RedundantDuplicationWhere } from "../../types/inputs/redundantDuplication/where";

builder.mutationField("redundantDuplicationDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RedundantDuplicationWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.redundantDuplication.deleteMany({ where: args.where });
      return count;
    },
  }),
);
