import { builder } from "src/builder";

import { TimeTravelLogWhere } from "../../types/inputs/timeTravelLog/where";

builder.mutationField("timeTravelLogDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: TimeTravelLogWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.timeTravelLog.deleteMany({ where: args.where });
      return count;
    },
  }),
);
