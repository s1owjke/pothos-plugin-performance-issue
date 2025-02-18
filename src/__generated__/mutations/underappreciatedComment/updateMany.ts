import { builder } from "src/builder";

import { UnderappreciatedCommentUpdateMany } from "../../types/inputs/underappreciatedComment/updateMany";
import { UnderappreciatedCommentWhere } from "../../types/inputs/underappreciatedComment/where";

builder.mutationField("underappreciatedCommentUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnderappreciatedCommentWhere, required: true }),
      data: t.arg({ type: UnderappreciatedCommentUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.underappreciatedComment.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
