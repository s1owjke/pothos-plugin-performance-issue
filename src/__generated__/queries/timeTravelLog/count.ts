import { builder } from "src/builder";

import { TimeTravelLogWhere } from "../../types/inputs/timeTravelLog/where";

builder.queryField("timeTravelLogCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: TimeTravelLogWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.timeTravelLog.count({ where: args.where || undefined });
    },
  }),
);
