import { builder } from "src/builder";

import { DoomedExperimentOrderBy } from "../../types/inputs/doomedExperiment/orderBy";
import { DoomedExperimentWhere } from "../../types/inputs/doomedExperiment/where";
import { DoomedExperiment } from "../../types/objects/doomedExperiment";

builder.queryField("doomedExperimentList", (t) =>
  t.prismaField({
    type: [DoomedExperiment],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: DoomedExperimentWhere }),
      orderBy: t.arg({ type: [DoomedExperimentOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.doomedExperiment.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
