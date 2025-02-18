import { builder } from "src/builder";

import { HalfBakedIdeaCreate } from "../../types/inputs/halfBakedIdea/create";
import { HalfBakedIdea } from "../../types/objects/halfBakedIdea";

builder.mutationField("halfBakedIdeaCreate", (t) =>
  t.field({
    type: HalfBakedIdea,
    nullable: false,
    args: {
      data: t.arg({ type: HalfBakedIdeaCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.halfBakedIdea.create({ data: args.data });
    },
  }),
);
