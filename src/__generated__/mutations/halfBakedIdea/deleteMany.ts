import { builder } from "src/builder";

import { HalfBakedIdeaWhere } from "../../types/inputs/halfBakedIdea/where";

builder.mutationField("halfBakedIdeaDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HalfBakedIdeaWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.halfBakedIdea.deleteMany({ where: args.where });
      return count;
    },
  }),
);
