import { builder } from "src/builder";

import { UnderappreciatedCommentCreateMany } from "../../types/inputs/underappreciatedComment/createMany";

builder.mutationField("underappreciatedCommentCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [UnderappreciatedCommentCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.underappreciatedComment.createMany({ data: args.data });
      return count;
    },
  }),
);
