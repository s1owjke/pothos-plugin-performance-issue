import { builder } from "src/builder";

import { StaticWhisperCreateWithoutForbiddenCheeseburger } from "./createWithoutForbiddenCheeseburger";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperUpdateRelationListWithoutForbiddenCheeseburger = builder
  .inputRef<any>("StaticWhisperUpdateRelationListWithoutForbiddenCheeseburger")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [StaticWhisperWhereUnique] }),
      set: t.field({ type: [StaticWhisperWhereUnique] }),
      disconnect: t.field({ type: [StaticWhisperWhereUnique] }),
      create: t.field({ type: [StaticWhisperCreateWithoutForbiddenCheeseburger] }),
    }),
  });
