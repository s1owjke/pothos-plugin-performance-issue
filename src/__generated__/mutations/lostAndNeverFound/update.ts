import { builder } from "src/builder";

import { LostAndNeverFoundUpdate } from "../../types/inputs/lostAndNeverFound/update";
import { LostAndNeverFoundWhereUnique } from "../../types/inputs/lostAndNeverFound/whereUnique";
import { LostAndNeverFound } from "../../types/objects/lostAndNeverFound";

builder.mutationField("lostAndNeverFoundUpdate", (t) =>
  t.field({
    type: LostAndNeverFound,
    nullable: false,
    args: {
      where: t.arg({ type: LostAndNeverFoundWhereUnique, required: true }),
      data: t.arg({ type: LostAndNeverFoundUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.lostAndNeverFound.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
