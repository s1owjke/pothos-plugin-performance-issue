import { builder } from "src/builder";

import { HalfBakedIdeaUpdate } from "../../types/inputs/halfBakedIdea/update";
import { HalfBakedIdeaWhereUnique } from "../../types/inputs/halfBakedIdea/whereUnique";
import { HalfBakedIdea } from "../../types/objects/halfBakedIdea";

builder.mutationField("halfBakedIdeaUpdate", (t) =>
  t.field({
    type: HalfBakedIdea,
    nullable: false,
    args: {
      where: t.arg({ type: HalfBakedIdeaWhereUnique, required: true }),
      data: t.arg({ type: HalfBakedIdeaUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.halfBakedIdea.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
