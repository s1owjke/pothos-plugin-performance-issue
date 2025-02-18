import { builder } from "src/builder";

import { TimeTravelLogCreate } from "../../types/inputs/timeTravelLog/create";
import { TimeTravelLog } from "../../types/objects/timeTravelLog";

builder.mutationField("timeTravelLogCreateBatch", (t) =>
  t.field({
    type: [TimeTravelLog],
    nullable: false,
    args: {
      data: t.arg({ type: [TimeTravelLogCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.timeTravelLog.create({ data })));
    },
  }),
);
