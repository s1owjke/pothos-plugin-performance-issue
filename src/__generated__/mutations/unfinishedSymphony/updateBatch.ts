import { builder } from "src/builder";

import { UnfinishedSymphonyUpdate } from "../../types/inputs/unfinishedSymphony/update";
import { UnfinishedSymphonyWhereUnique } from "../../types/inputs/unfinishedSymphony/whereUnique";
import { UnfinishedSymphony } from "../../types/objects/unfinishedSymphony";

builder.mutationField("unfinishedSymphonyUpdateBatch", (t) =>
  t.field({
    type: [UnfinishedSymphony],
    nullable: false,
    args: {
      where: t.arg({ type: [UnfinishedSymphonyWhereUnique], required: true }),
      data: t.arg({ type: [UnfinishedSymphonyUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.unfinishedSymphony.update({ where, data });
        }),
      );
    },
  }),
);
