import { builder } from "src/builder";

import { UnderappreciatedCommentWhere } from "../../types/inputs/underappreciatedComment/where";

builder.mutationField("underappreciatedCommentDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnderappreciatedCommentWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.underappreciatedComment.deleteMany({ where: args.where });
      return count;
    },
  }),
);
