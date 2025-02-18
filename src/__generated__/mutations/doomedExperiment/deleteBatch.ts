import { builder } from "src/builder";

import { DoomedExperimentWhereUnique } from "../../types/inputs/doomedExperiment/whereUnique";

builder.mutationField("doomedExperimentDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [DoomedExperimentWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.doomedExperiment.delete({ where })));
      return true;
    },
  }),
);
