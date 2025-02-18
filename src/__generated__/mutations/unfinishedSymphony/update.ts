import { builder } from "src/builder";

import { UnfinishedSymphonyUpdate } from "../../types/inputs/unfinishedSymphony/update";
import { UnfinishedSymphonyWhereUnique } from "../../types/inputs/unfinishedSymphony/whereUnique";
import { UnfinishedSymphony } from "../../types/objects/unfinishedSymphony";

builder.mutationField("unfinishedSymphonyUpdate", (t) =>
  t.field({
    type: UnfinishedSymphony,
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedSymphonyWhereUnique, required: true }),
      data: t.arg({ type: UnfinishedSymphonyUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unfinishedSymphony.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
