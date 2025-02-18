import { builder } from "src/builder";

import { MissingContextUpdate } from "../../types/inputs/missingContext/update";
import { MissingContextWhereUnique } from "../../types/inputs/missingContext/whereUnique";
import { MissingContext } from "../../types/objects/missingContext";

builder.mutationField("missingContextUpdateBatch", (t) =>
  t.field({
    type: [MissingContext],
    nullable: false,
    args: {
      where: t.arg({ type: [MissingContextWhereUnique], required: true }),
      data: t.arg({ type: [MissingContextUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.missingContext.update({ where, data });
        }),
      );
    },
  }),
);
