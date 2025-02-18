import { builder } from "src/builder";

import { EmotionalSupportTableUpdate } from "../../types/inputs/emotionalSupportTable/update";
import { EmotionalSupportTableWhereUnique } from "../../types/inputs/emotionalSupportTable/whereUnique";
import { EmotionalSupportTable } from "../../types/objects/emotionalSupportTable";

builder.mutationField("emotionalSupportTableUpdateBatch", (t) =>
  t.field({
    type: [EmotionalSupportTable],
    nullable: false,
    args: {
      where: t.arg({ type: [EmotionalSupportTableWhereUnique], required: true }),
      data: t.arg({ type: [EmotionalSupportTableUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.emotionalSupportTable.update({ where, data });
        }),
      );
    },
  }),
);
