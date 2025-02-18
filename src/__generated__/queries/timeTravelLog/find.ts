import { builder } from "src/builder";

import { TimeTravelLogWhereUnique } from "../../types/inputs/timeTravelLog/whereUnique";
import { TimeTravelLog } from "../../types/objects/timeTravelLog";

builder.queryField("timeTravelLog", (t) =>
  t.prismaField({
    type: TimeTravelLog,
    nullable: true,
    args: {
      where: t.arg({ type: TimeTravelLogWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.timeTravelLog.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
