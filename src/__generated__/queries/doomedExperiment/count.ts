import { builder } from "src/builder";

import { DoomedExperimentWhere } from "../../types/inputs/doomedExperiment/where";

builder.queryField("doomedExperimentCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DoomedExperimentWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.doomedExperiment.count({ where: args.where || undefined });
    },
  }),
);
