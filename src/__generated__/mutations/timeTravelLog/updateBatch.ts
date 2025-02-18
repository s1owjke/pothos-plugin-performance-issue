import { builder } from "src/builder";

import { TimeTravelLogUpdate } from "../../types/inputs/timeTravelLog/update";
import { TimeTravelLogWhereUnique } from "../../types/inputs/timeTravelLog/whereUnique";
import { TimeTravelLog } from "../../types/objects/timeTravelLog";

builder.mutationField("timeTravelLogUpdateBatch", (t) =>
  t.field({
    type: [TimeTravelLog],
    nullable: false,
    args: {
      where: t.arg({ type: [TimeTravelLogWhereUnique], required: true }),
      data: t.arg({ type: [TimeTravelLogUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.timeTravelLog.update({ where, data });
        }),
      );
    },
  }),
);
