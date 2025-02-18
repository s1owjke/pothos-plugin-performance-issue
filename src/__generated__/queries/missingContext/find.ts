import { builder } from "src/builder";

import { MissingContextWhereUnique } from "../../types/inputs/missingContext/whereUnique";
import { MissingContext } from "../../types/objects/missingContext";

builder.queryField("missingContext", (t) =>
  t.prismaField({
    type: MissingContext,
    nullable: true,
    args: {
      where: t.arg({ type: MissingContextWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.missingContext.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
