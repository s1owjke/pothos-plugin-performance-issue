import { builder } from "src/builder";

import { UnderappreciatedCommentCreate } from "../../types/inputs/underappreciatedComment/create";
import { UnderappreciatedComment } from "../../types/objects/underappreciatedComment";

builder.mutationField("underappreciatedCommentCreate", (t) =>
  t.field({
    type: UnderappreciatedComment,
    nullable: false,
    args: {
      data: t.arg({ type: UnderappreciatedCommentCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.underappreciatedComment.create({ data: args.data });
    },
  }),
);
