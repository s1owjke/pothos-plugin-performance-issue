import { builder } from "src/builder";

import { AlternativeFactUpdate } from "../../types/inputs/alternativeFact/update";
import { AlternativeFactWhereUnique } from "../../types/inputs/alternativeFact/whereUnique";
import { AlternativeFact } from "../../types/objects/alternativeFact";

builder.mutationField("alternativeFactUpdateBatch", (t) =>
  t.field({
    type: [AlternativeFact],
    nullable: false,
    args: {
      where: t.arg({ type: [AlternativeFactWhereUnique], required: true }),
      data: t.arg({ type: [AlternativeFactUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.alternativeFact.update({ where, data });
        }),
      );
    },
  }),
);
