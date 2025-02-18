import { builder } from "src/builder";

import { HyperlinkedUnicornUpdateMany } from "../../types/inputs/hyperlinkedUnicorn/updateMany";
import { HyperlinkedUnicornWhere } from "../../types/inputs/hyperlinkedUnicorn/where";

builder.mutationField("hyperlinkedUnicornUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HyperlinkedUnicornWhere, required: true }),
      data: t.arg({ type: HyperlinkedUnicornUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.hyperlinkedUnicorn.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
