import { builder } from "src/builder";

import { DoomedExperimentUpdate } from "../../types/inputs/doomedExperiment/update";
import { DoomedExperimentWhereUnique } from "../../types/inputs/doomedExperiment/whereUnique";
import { DoomedExperiment } from "../../types/objects/doomedExperiment";

builder.mutationField("doomedExperimentUpdate", (t) =>
  t.field({
    type: DoomedExperiment,
    nullable: false,
    args: {
      where: t.arg({ type: DoomedExperimentWhereUnique, required: true }),
      data: t.arg({ type: DoomedExperimentUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.doomedExperiment.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
