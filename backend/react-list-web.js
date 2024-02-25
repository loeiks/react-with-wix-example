// your backend code to get the data from your db
// we used a custom library to use MongoDB in Wix for this operation

import { Permissions, webMethod } from "wix-web-module";
import weivData from "@exweiv/weiv-data";

export const getListArr = webMethod(Permissions.Anyone, async () => {
    const { items } = await weivData.query("sample_airbnb/listingsAndReviews").limit(20).find({ suppressAuth: true });
    return items;
});