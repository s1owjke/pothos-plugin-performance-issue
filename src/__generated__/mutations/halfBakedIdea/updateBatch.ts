import { builder } from "src/builder";

import { HalfBakedIdeaUpdate } from "../../types/inputs/halfBakedIdea/update";
import { HalfBakedIdeaWhereUnique } from "../../types/inputs/halfBakedIdea/whereUnique";
import { HalfBakedIdea } from "../../types/objects/halfBakedIdea";

builder.mutationField("halfBakedIdeaUpdateBatch", (t) =>
  t.field({
    type: [HalfBakedIdea],
    nullable: false,
    args: {
      where: t.arg({ type: [HalfBakedIdeaWhereUnique], required: true }),
      data: t.arg({ type: [HalfBakedIdeaUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.halfBakedIdea.update({ where, data });
        }),
      );
    },
  }),
);
