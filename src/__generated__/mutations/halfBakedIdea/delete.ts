import { builder } from "src/builder";

import { HalfBakedIdeaWhereUnique } from "../../types/inputs/halfBakedIdea/whereUnique";

builder.mutationField("halfBakedIdeaDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: HalfBakedIdeaWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.halfBakedIdea.delete({ where: args.where });
      return true;
    },
  }),
);
