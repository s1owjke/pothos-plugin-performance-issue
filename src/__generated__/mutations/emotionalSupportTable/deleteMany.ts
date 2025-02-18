import { builder } from "src/builder";

import { EmotionalSupportTableWhere } from "../../types/inputs/emotionalSupportTable/where";

builder.mutationField("emotionalSupportTableDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EmotionalSupportTableWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.emotionalSupportTable.deleteMany({ where: args.where });
      return count;
    },
  }),
);
