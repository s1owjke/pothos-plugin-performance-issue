import { builder } from "src/builder";

import { RejectedTheoryWhereUnique } from "../../types/inputs/rejectedTheory/whereUnique";
import { RejectedTheory } from "../../types/objects/rejectedTheory";

builder.queryField("rejectedTheory", (t) =>
  t.prismaField({
    type: RejectedTheory,
    nullable: true,
    args: {
      where: t.arg({ type: RejectedTheoryWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.rejectedTheory.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
