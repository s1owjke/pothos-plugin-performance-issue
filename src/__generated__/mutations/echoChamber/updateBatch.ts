import { builder } from "src/builder";

import { EchoChamberUpdate } from "../../types/inputs/echoChamber/update";
import { EchoChamberWhereUnique } from "../../types/inputs/echoChamber/whereUnique";
import { EchoChamber } from "../../types/objects/echoChamber";

builder.mutationField("echoChamberUpdateBatch", (t) =>
  t.field({
    type: [EchoChamber],
    nullable: false,
    args: {
      where: t.arg({ type: [EchoChamberWhereUnique], required: true }),
      data: t.arg({ type: [EchoChamberUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.echoChamber.update({ where, data });
        }),
      );
    },
  }),
);
