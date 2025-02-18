import { builder } from "src/builder";

import { UnderappreciatedCommentWhere } from "../../types/inputs/underappreciatedComment/where";

builder.queryField("underappreciatedCommentCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnderappreciatedCommentWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.underappreciatedComment.count({ where: args.where || undefined });
    },
  }),
);
