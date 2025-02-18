import { builder } from "src/builder";

import { RedundantDuplicationUpdateMany } from "../../types/inputs/redundantDuplication/updateMany";
import { RedundantDuplicationWhere } from "../../types/inputs/redundantDuplication/where";

builder.mutationField("redundantDuplicationUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RedundantDuplicationWhere, required: true }),
      data: t.arg({ type: RedundantDuplicationUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.redundantDuplication.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
