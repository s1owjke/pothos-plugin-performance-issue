import { builder } from "src/builder";

import { RealmDirectoryCreate } from "../../types/inputs/realmDirectory/create";
import { RealmDirectory } from "../../types/objects/realmDirectory";

builder.mutationField("realmDirectoryCreateBatch", (t) =>
  t.field({
    type: [RealmDirectory],
    nullable: false,
    args: {
      data: t.arg({ type: [RealmDirectoryCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.realmDirectory.create({ data })));
    },
  }),
);
