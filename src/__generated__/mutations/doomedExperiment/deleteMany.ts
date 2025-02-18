import { builder } from "src/builder";

import { DoomedExperimentWhere } from "../../types/inputs/doomedExperiment/where";

builder.mutationField("doomedExperimentDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DoomedExperimentWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.doomedExperiment.deleteMany({ where: args.where });
      return count;
    },
  }),
);
