import { builder } from "src/builder";

import { LostAndNeverFoundCreate } from "../../types/inputs/lostAndNeverFound/create";
import { LostAndNeverFound } from "../../types/objects/lostAndNeverFound";

builder.mutationField("lostAndNeverFoundCreateBatch", (t) =>
  t.field({
    type: [LostAndNeverFound],
    nullable: false,
    args: {
      data: t.arg({ type: [LostAndNeverFoundCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.lostAndNeverFound.create({ data })));
    },
  }),
);
