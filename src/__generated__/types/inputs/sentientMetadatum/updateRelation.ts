import { builder } from "src/builder";

import { SentientMetadatumCreate } from "./create";
import { SentientMetadatumUpdate } from "./update";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumUpdateRelation = builder.inputRef<any>("SentientMetadatumUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SentientMetadatumWhereUnique }),
    disconnect: t.field({ type: SentientMetadatumWhereUnique }),
    create: t.field({ type: SentientMetadatumCreate }),
    update: t.field({ type: SentientMetadatumUpdate }),
  }),
});
