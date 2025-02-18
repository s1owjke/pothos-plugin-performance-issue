import { builder } from "src/builder";

import { HalfBakedIdeaWhereUnique } from "../../types/inputs/halfBakedIdea/whereUnique";
import { HalfBakedIdea } from "../../types/objects/halfBakedIdea";

builder.queryField("halfBakedIdea", (t) =>
  t.prismaField({
    type: HalfBakedIdea,
    nullable: true,
    args: {
      where: t.arg({ type: HalfBakedIdeaWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.halfBakedIdea.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
