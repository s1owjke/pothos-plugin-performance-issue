import { builder } from "src/builder";

import { EmotionalSupportTableWhereUnique } from "../../types/inputs/emotionalSupportTable/whereUnique";

builder.mutationField("emotionalSupportTableDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: EmotionalSupportTableWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.emotionalSupportTable.delete({ where: args.where });
      return true;
    },
  }),
);
