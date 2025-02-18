import { builder } from "src/builder";

import { ClassifiedSillinessCreate } from "../../types/inputs/classifiedSilliness/create";
import { ClassifiedSilliness } from "../../types/objects/classifiedSilliness";

builder.mutationField("classifiedSillinessCreateBatch", (t) =>
  t.field({
    type: [ClassifiedSilliness],
    nullable: false,
    args: {
      data: t.arg({ type: [ClassifiedSillinessCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.classifiedSilliness.create({ data })));
    },
  }),
);
