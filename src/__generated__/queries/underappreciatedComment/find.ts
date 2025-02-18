import { builder } from "src/builder";

import { UnderappreciatedCommentWhereUnique } from "../../types/inputs/underappreciatedComment/whereUnique";
import { UnderappreciatedComment } from "../../types/objects/underappreciatedComment";

builder.queryField("underappreciatedComment", (t) =>
  t.prismaField({
    type: UnderappreciatedComment,
    nullable: true,
    args: {
      where: t.arg({ type: UnderappreciatedCommentWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.underappreciatedComment.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
