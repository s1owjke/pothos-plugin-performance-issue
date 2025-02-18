import { builder } from "src/builder";

import { WormholeRentalCreate } from "./create";
import { WormholeRentalUpdate } from "./update";
import { WormholeRentalWhereUnique } from "./whereUnique";

export const WormholeRentalUpdateRelation = builder.inputRef<any>("WormholeRentalUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: WormholeRentalWhereUnique }),
    disconnect: t.field({ type: WormholeRentalWhereUnique }),
    create: t.field({ type: WormholeRentalCreate }),
    update: t.field({ type: WormholeRentalUpdate }),
  }),
});
