import { builder } from "src/builder";

import { HalfBakedIdeaWhere } from "../../types/inputs/halfBakedIdea/where";

builder.queryField("halfBakedIdeaCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HalfBakedIdeaWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.halfBakedIdea.count({ where: args.where || undefined });
    },
  }),
);
