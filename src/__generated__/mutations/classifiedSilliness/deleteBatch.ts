import { builder } from "src/builder";

import { ClassifiedSillinessWhereUnique } from "../../types/inputs/classifiedSilliness/whereUnique";

builder.mutationField("classifiedSillinessDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ClassifiedSillinessWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.classifiedSilliness.delete({ where })));
      return true;
    },
  }),
);
