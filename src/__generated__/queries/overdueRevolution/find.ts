import { builder } from "src/builder";

import { OverdueRevolutionWhereUnique } from "../../types/inputs/overdueRevolution/whereUnique";
import { OverdueRevolution } from "../../types/objects/overdueRevolution";

builder.queryField("overdueRevolution", (t) =>
  t.prismaField({
    type: OverdueRevolution,
    nullable: true,
    args: {
      where: t.arg({ type: OverdueRevolutionWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.overdueRevolution.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
