import { builder } from "src/builder";

import { EmotionalSupportTableCreateMany } from "../../types/inputs/emotionalSupportTable/createMany";

builder.mutationField("emotionalSupportTableCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [EmotionalSupportTableCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.emotionalSupportTable.createMany({ data: args.data });
      return count;
    },
  }),
);
