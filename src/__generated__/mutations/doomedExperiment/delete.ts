import { builder } from "src/builder";

import { DoomedExperimentWhereUnique } from "../../types/inputs/doomedExperiment/whereUnique";

builder.mutationField("doomedExperimentDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: DoomedExperimentWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.doomedExperiment.delete({ where: args.where });
      return true;
    },
  }),
);
