import { builder } from "src/builder";

import { UnderappreciatedCommentWhereUnique } from "../../types/inputs/underappreciatedComment/whereUnique";

builder.mutationField("underappreciatedCommentDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: UnderappreciatedCommentWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.underappreciatedComment.delete({ where: args.where });
      return true;
    },
  }),
);
