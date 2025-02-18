import { builder } from "src/builder";

import { DoomedExperimentCreate } from "../../types/inputs/doomedExperiment/create";
import { DoomedExperiment } from "../../types/objects/doomedExperiment";

builder.mutationField("doomedExperimentCreateBatch", (t) =>
  t.field({
    type: [DoomedExperiment],
    nullable: false,
    args: {
      data: t.arg({ type: [DoomedExperimentCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.doomedExperiment.create({ data })));
    },
  }),
);
