import { builder } from "src/builder";

import { RejectedTheoryCreateMany } from "../../types/inputs/rejectedTheory/createMany";

builder.mutationField("rejectedTheoryCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [RejectedTheoryCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.rejectedTheory.createMany({ data: args.data });
      return count;
    },
  }),
);
