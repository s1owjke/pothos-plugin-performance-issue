import { builder } from "src/builder";

import { UnderappreciatedCommentCreate } from "../../types/inputs/underappreciatedComment/create";
import { UnderappreciatedComment } from "../../types/objects/underappreciatedComment";

builder.mutationField("underappreciatedCommentCreateBatch", (t) =>
  t.field({
    type: [UnderappreciatedComment],
    nullable: false,
    args: {
      data: t.arg({ type: [UnderappreciatedCommentCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.underappreciatedComment.create({ data })));
    },
  }),
);
