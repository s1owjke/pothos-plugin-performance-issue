import { builder } from "src/builder";

import { RealmDirectoryCreate } from "../../types/inputs/realmDirectory/create";
import { RealmDirectory } from "../../types/objects/realmDirectory";

builder.mutationField("realmDirectoryCreate", (t) =>
  t.field({
    type: RealmDirectory,
    nullable: false,
    args: {
      data: t.arg({ type: RealmDirectoryCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.realmDirectory.create({ data: args.data });
    },
  }),
);
