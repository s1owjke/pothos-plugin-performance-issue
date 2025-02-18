import { builder } from "src/builder";

import { EndlessLoopCreate } from "../../types/inputs/endlessLoop/create";
import { EndlessLoop } from "../../types/objects/endlessLoop";

builder.mutationField("endlessLoopCreateBatch", (t) =>
  t.field({
    type: [EndlessLoop],
    nullable: false,
    args: {
      data: t.arg({ type: [EndlessLoopCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.endlessLoop.create({ data })));
    },
  }),
);
