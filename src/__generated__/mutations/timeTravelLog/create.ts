import { builder } from "src/builder";

import { TimeTravelLogCreate } from "../../types/inputs/timeTravelLog/create";
import { TimeTravelLog } from "../../types/objects/timeTravelLog";

builder.mutationField("timeTravelLogCreate", (t) =>
  t.field({
    type: TimeTravelLog,
    nullable: false,
    args: {
      data: t.arg({ type: TimeTravelLogCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.timeTravelLog.create({ data: args.data });
    },
  }),
);
