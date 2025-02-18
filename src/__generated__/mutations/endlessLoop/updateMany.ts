import { builder } from "src/builder";

import { EndlessLoopUpdateMany } from "../../types/inputs/endlessLoop/updateMany";
import { EndlessLoopWhere } from "../../types/inputs/endlessLoop/where";

builder.mutationField("endlessLoopUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EndlessLoopWhere, required: true }),
      data: t.arg({ type: EndlessLoopUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.endlessLoop.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
