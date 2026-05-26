This is a relatively low impact task, but one of growth-loop features.

The idea is that beekeeper has apiary, but usually its private information (unless its in the government registry). This feature tackles apiary position visibility between web-app users. In certain cases it may be important to actively share apiary position with other people.

1. If you are an [Industrial beekeepers](https://www.notion.so/Industrial-beekeepers-cf0c8af087cb456dbb72058b88a42db9?pvs=21) and you want a buyer of bees, swarms or even hives to come to your location. So instead of just sending a google-link, you may want to send a link to our public page that would showcase more info
2. If you are a [Farmers](https://www.notion.so/Farmers-df786b4ba018453da181a8d9da186a79?pvs=21) and you had a pesticide exposure, you may want to send apiary position to others and
    1. highlight which fields are nearby that likely had the pesticide treatment
    2. highlight which hives were affected by the pesticide, linking videos as proof
    3. post the results in social media
3. If you are a [Backyard beekeepers](https://www.notion.so/Backyard-beekeepers-3f32d134fa11467aad7f5015288a2efe?pvs=21) and you are worried about [**Infestation of Varroa mite**](https://www.notion.so/Infestation-of-Varroa-mite-3a67aa627e0f438592cc7fb34e81d866?pvs=21), you may want to know who are your neighbour beekeepers. And also share your position and varroa infestation levels.
4. For [Potential new beekeepers](https://www.notion.so/Potential-new-beekeepers-b376ee507ba84999a040110535f7ab8c?pvs=21) that want assistance, help, education from other beekeepers nearby, you may want to contact and talk to others (in addition to existing social networks)

## Suggested changes

- In apiary creation & edit view, add new privacy checkboxes
    - `[x] share location`
    - `[x] share infestation metrics`
    - `[ ] share contact info`
        - needs phone field in contact information
    - Checked by default
    - If checked, display apiary location for other web-app users
        - show phone number if its shared and present
        - apiary icon of others should also show varroa infestation metric, see [Varroa infestation management](https://www.notion.so/Varroa-infestation-management-b84228df14494c0ba78f4d473046cca7?pvs=21)
- In apiary edit view, add button `Get directions link`
    - on-click, should generate a URL to a public apiary view, similar to [Share of beehive inspection public URL](https://www.notion.so/Share-of-beehive-inspection-public-URL-477d096f683542f4a182e53ff5f23780?pvs=21)
    - on opening a apiary URL by anonymous user, should show
        - actual hives (as icons) to show off how many hives you have
        - plants growing nearby
        - hint about [Hive ownership transfer](https://www.notion.so/Hive-ownership-transfer-f01c55aad5584cea933186c9b200a039?pvs=21) ability
        - map
            - circle around apiary
- In apiary edit view, add button `Generate pesticide exposure notice`
    - allow user to select affected hives
        - select videos from [Video streaming playback](https://www.notion.so/Video-streaming-playback-7214e1994f564d4b8888a5acae7318f0?pvs=21) as proof
    - Generate a URL for the public page
    - On page show
        - hives affected
            - selected videos from [Video streaming playback](https://www.notion.so/Video-streaming-playback-7214e1994f564d4b8888a5acae7318f0?pvs=21)