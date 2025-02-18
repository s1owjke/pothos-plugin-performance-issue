import { builder } from "src/builder";

import { UnderappreciatedCommentWhereUnique } from "../../types/inputs/underappreciatedComment/whereUnique";

builder.mutationField("underappreciatedCommentDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [UnderappreciatedCommentWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.underappreciatedComment.delete({ where })));
      return true;
    },
  }),
);
