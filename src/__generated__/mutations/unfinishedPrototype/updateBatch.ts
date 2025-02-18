import { builder } from "src/builder";

import { UnfinishedPrototypeUpdate } from "../../types/inputs/unfinishedPrototype/update";
import { UnfinishedPrototypeWhereUnique } from "../../types/inputs/unfinishedPrototype/whereUnique";
import { UnfinishedPrototype } from "../../types/objects/unfinishedPrototype";

builder.mutationField("unfinishedPrototypeUpdateBatch", (t) =>
  t.field({
    type: [UnfinishedPrototype],
    nullable: false,
    args: {
      where: t.arg({ type: [UnfinishedPrototypeWhereUnique], required: true }),
      data: t.arg({ type: [UnfinishedPrototypeUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.unfinishedPrototype.update({ where, data });
        }),
      );
    },
  }),
);
