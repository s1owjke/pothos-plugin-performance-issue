import { builder } from "src/builder";

import { ClassifiedSillinessCreate } from "../../types/inputs/classifiedSilliness/create";
import { ClassifiedSilliness } from "../../types/objects/classifiedSilliness";

builder.mutationField("classifiedSillinessCreate", (t) =>
  t.field({
    type: ClassifiedSilliness,
    nullable: false,
    args: {
      data: t.arg({ type: ClassifiedSillinessCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.classifiedSilliness.create({ data: args.data });
    },
  }),
);
