import { builder } from "src/builder";

import { LostAndNeverFoundCreate } from "../../types/inputs/lostAndNeverFound/create";
import { LostAndNeverFound } from "../../types/objects/lostAndNeverFound";

builder.mutationField("lostAndNeverFoundCreate", (t) =>
  t.field({
    type: LostAndNeverFound,
    nullable: false,
    args: {
      data: t.arg({ type: LostAndNeverFoundCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.lostAndNeverFound.create({ data: args.data });
    },
  }),
);
