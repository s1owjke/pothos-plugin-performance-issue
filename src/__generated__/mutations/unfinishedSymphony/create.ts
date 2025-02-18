import { builder } from "src/builder";

import { UnfinishedSymphonyCreate } from "../../types/inputs/unfinishedSymphony/create";
import { UnfinishedSymphony } from "../../types/objects/unfinishedSymphony";

builder.mutationField("unfinishedSymphonyCreate", (t) =>
  t.field({
    type: UnfinishedSymphony,
    nullable: false,
    args: {
      data: t.arg({ type: UnfinishedSymphonyCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unfinishedSymphony.create({ data: args.data });
    },
  }),
);
