import { builder } from "src/builder";

import { HyperlinkedUnicornUpdate } from "../../types/inputs/hyperlinkedUnicorn/update";
import { HyperlinkedUnicornWhereUnique } from "../../types/inputs/hyperlinkedUnicorn/whereUnique";
import { HyperlinkedUnicorn } from "../../types/objects/hyperlinkedUnicorn";

builder.mutationField("hyperlinkedUnicornUpdateBatch", (t) =>
  t.field({
    type: [HyperlinkedUnicorn],
    nullable: false,
    args: {
      where: t.arg({ type: [HyperlinkedUnicornWhereUnique], required: true }),
      data: t.arg({ type: [HyperlinkedUnicornUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.hyperlinkedUnicorn.update({ where, data });
        }),
      );
    },
  }),
);
