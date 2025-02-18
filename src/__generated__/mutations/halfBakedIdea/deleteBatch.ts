import { builder } from "src/builder";

import { HalfBakedIdeaWhereUnique } from "../../types/inputs/halfBakedIdea/whereUnique";

builder.mutationField("halfBakedIdeaDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [HalfBakedIdeaWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.halfBakedIdea.delete({ where })));
      return true;
    },
  }),
);
