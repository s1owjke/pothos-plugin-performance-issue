import { builder } from "src/builder";

import { ClassifiedSillinessWhereUnique } from "../../types/inputs/classifiedSilliness/whereUnique";
import { ClassifiedSilliness } from "../../types/objects/classifiedSilliness";

builder.queryField("classifiedSilliness", (t) =>
  t.prismaField({
    type: ClassifiedSilliness,
    nullable: true,
    args: {
      where: t.arg({ type: ClassifiedSillinessWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.classifiedSilliness.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
