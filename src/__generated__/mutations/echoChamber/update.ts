import { builder } from "src/builder";

import { EchoChamberUpdate } from "../../types/inputs/echoChamber/update";
import { EchoChamberWhereUnique } from "../../types/inputs/echoChamber/whereUnique";
import { EchoChamber } from "../../types/objects/echoChamber";

builder.mutationField("echoChamberUpdate", (t) =>
  t.field({
    type: EchoChamber,
    nullable: false,
    args: {
      where: t.arg({ type: EchoChamberWhereUnique, required: true }),
      data: t.arg({ type: EchoChamberUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.echoChamber.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
