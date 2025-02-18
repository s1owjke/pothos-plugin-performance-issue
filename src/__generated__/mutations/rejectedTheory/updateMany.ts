import { builder } from "src/builder";

import { RejectedTheoryUpdateMany } from "../../types/inputs/rejectedTheory/updateMany";
import { RejectedTheoryWhere } from "../../types/inputs/rejectedTheory/where";

builder.mutationField("rejectedTheoryUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RejectedTheoryWhere, required: true }),
      data: t.arg({ type: RejectedTheoryUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.rejectedTheory.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
