import { builder } from "src/builder";

import { ClassifiedSillinessUpdate } from "../../types/inputs/classifiedSilliness/update";
import { ClassifiedSillinessWhereUnique } from "../../types/inputs/classifiedSilliness/whereUnique";
import { ClassifiedSilliness } from "../../types/objects/classifiedSilliness";

builder.mutationField("classifiedSillinessUpdateBatch", (t) =>
  t.field({
    type: [ClassifiedSilliness],
    nullable: false,
    args: {
      where: t.arg({ type: [ClassifiedSillinessWhereUnique], required: true }),
      data: t.arg({ type: [ClassifiedSillinessUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.classifiedSilliness.update({ where, data });
        }),
      );
    },
  }),
);
