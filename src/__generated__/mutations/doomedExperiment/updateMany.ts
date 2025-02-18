import { builder } from "src/builder";

import { DoomedExperimentUpdateMany } from "../../types/inputs/doomedExperiment/updateMany";
import { DoomedExperimentWhere } from "../../types/inputs/doomedExperiment/where";

builder.mutationField("doomedExperimentUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DoomedExperimentWhere, required: true }),
      data: t.arg({ type: DoomedExperimentUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.doomedExperiment.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
