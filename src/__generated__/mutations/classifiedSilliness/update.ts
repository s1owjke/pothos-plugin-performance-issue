import { builder } from "src/builder";

import { ClassifiedSillinessUpdate } from "../../types/inputs/classifiedSilliness/update";
import { ClassifiedSillinessWhereUnique } from "../../types/inputs/classifiedSilliness/whereUnique";
import { ClassifiedSilliness } from "../../types/objects/classifiedSilliness";

builder.mutationField("classifiedSillinessUpdate", (t) =>
  t.field({
    type: ClassifiedSilliness,
    nullable: false,
    args: {
      where: t.arg({ type: ClassifiedSillinessWhereUnique, required: true }),
      data: t.arg({ type: ClassifiedSillinessUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.classifiedSilliness.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
