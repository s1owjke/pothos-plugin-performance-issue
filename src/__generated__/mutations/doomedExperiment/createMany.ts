import { builder } from "src/builder";

import { DoomedExperimentCreateMany } from "../../types/inputs/doomedExperiment/createMany";

builder.mutationField("doomedExperimentCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [DoomedExperimentCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.doomedExperiment.createMany({ data: args.data });
      return count;
    },
  }),
);
