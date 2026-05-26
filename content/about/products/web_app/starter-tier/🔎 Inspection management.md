---
status: complete
---


<iframe width="100%" height="400" src="https://www.youtube.com/embed/5tYttNWfQPA" title="Beehive inspections feature" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Creating inspection

- User as beekeeper did manual beehive inspection and took the photos
- User has created a hive with boxes and uploaded frame photos
- For a while (2 weeks) he did nothing. Now he did another inspection and now he needs to store old state
- User clicks `Create Inspection`
    - All of the hive data is stored as a snapshot in time
    - TIME of the inspection is taken from the oldest frame **photo creation time**, not current time
    - Thus an inspection that is 2 week old is created
- Frame photos are **unlinked/cleared** along with detected objects
- Frame cell statistics is cleared ([Honeycomb cell detection & management](https://www.notion.so/Honeycomb-cell-detection-management-e9ff03128cdb489293737b8a4c1e7098?pvs=21))
- Frames become empty and user can upload new photos
- A message `Inspection created` is shown
- Inspection timeline link is shown near the menu with amount of inspections


## Listing inspections

- user navigates to hive inspection list ex. [https://app.gratheon.com/apiaries/7/hives/118/inspections](https://app.gratheon.com/apiaries/7/hives/118/inspections)
- user sees list of inspections with its date
- user can click on inspection to see details

## Inspection view

- user can see frames, frame cell statistics
- user can see frame photos