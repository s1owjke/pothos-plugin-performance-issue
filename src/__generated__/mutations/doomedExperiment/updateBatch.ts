import { builder } from "src/builder";

import { DoomedExperimentUpdate } from "../../types/inputs/doomedExperiment/update";
import { DoomedExperimentWhereUnique } from "../../types/inputs/doomedExperiment/whereUnique";
import { DoomedExperiment } from "../../types/objects/doomedExperiment";

builder.mutationField("doomedExperimentUpdateBatch", (t) =>
  t.field({
    type: [DoomedExperiment],
    nullable: false,
    args: {
      where: t.arg({ type: [DoomedExperimentWhereUnique], required: true }),
      data: t.arg({ type: [DoomedExperimentUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.doomedExperiment.update({ where, data });
        }),
      );
    },
  }),
);
