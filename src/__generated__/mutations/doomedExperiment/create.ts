import { builder } from "src/builder";

import { DoomedExperimentCreate } from "../../types/inputs/doomedExperiment/create";
import { DoomedExperiment } from "../../types/objects/doomedExperiment";

builder.mutationField("doomedExperimentCreate", (t) =>
  t.field({
    type: DoomedExperiment,
    nullable: false,
    args: {
      data: t.arg({ type: DoomedExperimentCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.doomedExperiment.create({ data: args.data });
    },
  }),
);
