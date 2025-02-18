import { builder } from "src/builder";

import { UnderappreciatedCommentUpdate } from "../../types/inputs/underappreciatedComment/update";
import { UnderappreciatedCommentWhereUnique } from "../../types/inputs/underappreciatedComment/whereUnique";
import { UnderappreciatedComment } from "../../types/objects/underappreciatedComment";

builder.mutationField("underappreciatedCommentUpdate", (t) =>
  t.field({
    type: UnderappreciatedComment,
    nullable: false,
    args: {
      where: t.arg({ type: UnderappreciatedCommentWhereUnique, required: true }),
      data: t.arg({ type: UnderappreciatedCommentUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.underappreciatedComment.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
