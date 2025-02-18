import { builder } from "src/builder";

import { DoomedExperimentWhereUnique } from "../../types/inputs/doomedExperiment/whereUnique";
import { DoomedExperiment } from "../../types/objects/doomedExperiment";

builder.queryField("doomedExperiment", (t) =>
  t.prismaField({
    type: DoomedExperiment,
    nullable: true,
    args: {
      where: t.arg({ type: DoomedExperimentWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.doomedExperiment.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
