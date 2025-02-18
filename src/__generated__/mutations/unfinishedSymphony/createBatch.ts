import { builder } from "src/builder";

import { UnfinishedSymphonyCreate } from "../../types/inputs/unfinishedSymphony/create";
import { UnfinishedSymphony } from "../../types/objects/unfinishedSymphony";

builder.mutationField("unfinishedSymphonyCreateBatch", (t) =>
  t.field({
    type: [UnfinishedSymphony],
    nullable: false,
    args: {
      data: t.arg({ type: [UnfinishedSymphonyCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.unfinishedSymphony.create({ data })));
    },
  }),
);
