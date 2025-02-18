import { builder } from "src/builder";

import { TimeTravelLogCreateMany } from "../../types/inputs/timeTravelLog/createMany";

builder.mutationField("timeTravelLogCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [TimeTravelLogCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.timeTravelLog.createMany({ data: args.data });
      return count;
    },
  }),
);
