import { builder } from "src/builder";

import { EmotionalSupportTableWhereUnique } from "../../types/inputs/emotionalSupportTable/whereUnique";

builder.mutationField("emotionalSupportTableDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [EmotionalSupportTableWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.emotionalSupportTable.delete({ where })));
      return true;
    },
  }),
);
