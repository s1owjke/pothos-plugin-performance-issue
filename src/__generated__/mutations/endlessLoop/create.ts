import { builder } from "src/builder";

import { EndlessLoopCreate } from "../../types/inputs/endlessLoop/create";
import { EndlessLoop } from "../../types/objects/endlessLoop";

builder.mutationField("endlessLoopCreate", (t) =>
  t.field({
    type: EndlessLoop,
    nullable: false,
    args: {
      data: t.arg({ type: EndlessLoopCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.endlessLoop.create({ data: args.data });
    },
  }),
);
