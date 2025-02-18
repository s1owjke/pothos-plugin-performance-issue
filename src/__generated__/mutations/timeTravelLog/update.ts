import { builder } from "src/builder";

import { TimeTravelLogUpdate } from "../../types/inputs/timeTravelLog/update";
import { TimeTravelLogWhereUnique } from "../../types/inputs/timeTravelLog/whereUnique";
import { TimeTravelLog } from "../../types/objects/timeTravelLog";

builder.mutationField("timeTravelLogUpdate", (t) =>
  t.field({
    type: TimeTravelLog,
    nullable: false,
    args: {
      where: t.arg({ type: TimeTravelLogWhereUnique, required: true }),
      data: t.arg({ type: TimeTravelLogUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.timeTravelLog.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
