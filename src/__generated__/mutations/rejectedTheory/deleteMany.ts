import { builder } from "src/builder";

import { RejectedTheoryWhere } from "../../types/inputs/rejectedTheory/where";

builder.mutationField("rejectedTheoryDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RejectedTheoryWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.rejectedTheory.deleteMany({ where: args.where });
      return count;
    },
  }),
);
