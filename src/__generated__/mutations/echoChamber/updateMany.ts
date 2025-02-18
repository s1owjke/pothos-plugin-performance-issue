import { builder } from "src/builder";

import { EchoChamberUpdateMany } from "../../types/inputs/echoChamber/updateMany";
import { EchoChamberWhere } from "../../types/inputs/echoChamber/where";

builder.mutationField("echoChamberUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EchoChamberWhere, required: true }),
      data: t.arg({ type: EchoChamberUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.echoChamber.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
