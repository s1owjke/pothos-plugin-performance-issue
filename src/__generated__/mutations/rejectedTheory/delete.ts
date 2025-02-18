import { builder } from "src/builder";

import { RejectedTheoryWhereUnique } from "../../types/inputs/rejectedTheory/whereUnique";

builder.mutationField("rejectedTheoryDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: RejectedTheoryWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.rejectedTheory.delete({ where: args.where });
      return true;
    },
  }),
);
