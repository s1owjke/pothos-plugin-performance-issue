import { builder } from "src/builder";

import { HalfBakedIdeaCreate } from "../../types/inputs/halfBakedIdea/create";
import { HalfBakedIdea } from "../../types/objects/halfBakedIdea";

builder.mutationField("halfBakedIdeaCreateBatch", (t) =>
  t.field({
    type: [HalfBakedIdea],
    nullable: false,
    args: {
      data: t.arg({ type: [HalfBakedIdeaCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.halfBakedIdea.create({ data })));
    },
  }),
);
