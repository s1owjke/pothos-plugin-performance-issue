import { builder } from "src/builder";

import { HalfBakedIdeaUpdateMany } from "../../types/inputs/halfBakedIdea/updateMany";
import { HalfBakedIdeaWhere } from "../../types/inputs/halfBakedIdea/where";

builder.mutationField("halfBakedIdeaUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HalfBakedIdeaWhere, required: true }),
      data: t.arg({ type: HalfBakedIdeaUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.halfBakedIdea.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
