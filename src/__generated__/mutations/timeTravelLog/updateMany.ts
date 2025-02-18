import { builder } from "src/builder";

import { TimeTravelLogUpdateMany } from "../../types/inputs/timeTravelLog/updateMany";
import { TimeTravelLogWhere } from "../../types/inputs/timeTravelLog/where";

builder.mutationField("timeTravelLogUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: TimeTravelLogWhere, required: true }),
      data: t.arg({ type: TimeTravelLogUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.timeTravelLog.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
