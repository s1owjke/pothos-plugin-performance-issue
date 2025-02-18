import { builder } from "src/builder";

import { HalfBakedIdeaCreateMany } from "../../types/inputs/halfBakedIdea/createMany";

builder.mutationField("halfBakedIdeaCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [HalfBakedIdeaCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.halfBakedIdea.createMany({ data: args.data });
      return count;
    },
  }),
);
