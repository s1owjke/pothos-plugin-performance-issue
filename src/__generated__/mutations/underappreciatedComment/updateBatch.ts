import { builder } from "src/builder";

import { UnderappreciatedCommentUpdate } from "../../types/inputs/underappreciatedComment/update";
import { UnderappreciatedCommentWhereUnique } from "../../types/inputs/underappreciatedComment/whereUnique";
import { UnderappreciatedComment } from "../../types/objects/underappreciatedComment";

builder.mutationField("underappreciatedCommentUpdateBatch", (t) =>
  t.field({
    type: [UnderappreciatedComment],
    nullable: false,
    args: {
      where: t.arg({ type: [UnderappreciatedCommentWhereUnique], required: true }),
      data: t.arg({ type: [UnderappreciatedCommentUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.underappreciatedComment.update({ where, data });
        }),
      );
    },
  }),
);
