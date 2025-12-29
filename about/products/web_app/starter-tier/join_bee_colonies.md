---
status: complete
title: 🫶🏻 Join colonies
---

### 🎯 Purpose
Merge two colonies into one stronger hive while keeping complete digital records. Perfect for strengthening weak colonies before winter, managing queen genetics, or consolidating your apiary.

### 🎭 User Story
- As a beekeeper managing multiple colonies
- I want to merge two hives together with full control over queen management
- So that I can strengthen weak colonies, prepare for winter, or manage genetics while preserving all historical data

### 🚀 Key Benefits
- **Visual Comparison**: See both hives side-by-side with bee counts and queen details before merging
- **Queen Control**: Choose which queen survives - both queens, target queen, or source queen
- **Smart Automation**: System automatically handles box movement and structural elements
- **Complete History**: Track all merges with dates, types, and clickable links between hives
- **Easy Navigation**: Merged hives stay visible with clear status indicators
- **Data Preservation**: All box data, frames, and inspection history maintained

### 💡 Common Scenarios

**Strengthen Before Winter**
You have a weak colony that won't survive winter alone. Merge it with a stronger hive to boost bee population and food stores, giving both colonies a better survival chance.

**Manage Queen Loss**
A colony lost its queen and can't raise a new one. Merge it with a queen-right colony to save the bees and their resources rather than letting them dwindle.

**Consolidate Your Apiary**
Reduce hive count before moving to a new location or scaling down operations. Combine colonies strategically while keeping all historical data for future reference.

### 🎓 How to Use

#### 1. Open the Merge Dialog
1. Navigate to the hive you want to merge (source hive)
2. Click **"Join Colony"** button
3. Modal opens showing your current hive on the left

#### 2. Select Target Hive
- View list of available hives in your apiary
- See bee counts and queen details for each option
- Click your desired target hive
- Compare both hives side-by-side

#### 3. Choose Queen Management Strategy

Click the toggle button between hive panels to select:

**🎲 Both Queens (+)** - Let them fight naturally, strongest survives
- Best when you're unsure which queen is better
- Natural selection determines the winner

**➡️ Target Queen** - Keep target queen, remove source queen before merge
- Best when target has younger or better genetics
- Predictable outcome, controlled genetics

**⬅️ Source Queen** - Keep source queen, remove target queen before merge  
- Best when source has younger or better genetics
- Predictable outcome, controlled genetics

#### 4. Complete the Merge
1. Review both hive details one last time
2. Click **"Join Colonies"** button
3. System automatically moves boxes and updates records
4. You're redirected to the merged target hive

#### 5. View Results
- **Source hive**: Marked as "merged", grayed out in apiary list, shows link to target
- **Target hive**: Active with all boxes combined, shows merge history with dates
- All inspection and frame data preserved in both hives

### ⚙️ What Happens Behind the Scenes

The system intelligently handles the merge:
- **Box Movement**: Brood boxes and supers move to target hive, placed on top
- **Structural Elements**: Bottom boards and entrance gates stay with source hive
- **Data Preservation**: All frames, photos, and inspection history maintained
- **Status Updates**: Source hive marked as "merged", target stays active
- **History Tracking**: Complete merge timeline with dates and queen decisions


---
**Last Updated**: December 5, 2025

### ⚠️ Important Considerations

**Irreversible Operation:**
- ⚠️ Merge cannot be undone
- Boxes are permanently moved
- Source hive marked as merged
- Plan carefully before confirming

**Validation Rules:**
- Both hives must exist and belong to same user
- Both hives must be in same apiary
- Source hive cannot already be merged or collapsed
- Target hive must have space (box positions available)
- Merge type must be valid (one of three options)

**Physical Merge Steps:**
The digital merge in the app represents the logistics. Physical colony merge requires:
1. Choose merge method (newspaper, direct, etc.)
2. Remove or cage queen as per chosen merge type
3. Physically combine boxes as indicated in app
4. Monitor colony for acceptance (3-7 days)
5. Check for fighting or rejection signs
6. Confirm single queen after merge

### 🎯 Use Cases

**1. Strengthen Weak Colony**
- Source: Weak colony (1000 bees)
- Target: Strong colony (5000 bees)
- Merge type: Target queen (→)
- Result: 6000 bee colony with strong queen

**2. Combine Before Winter**
- Source: Small late-season split
- Target: Established colony
- Merge type: Both queens (+)
- Result: Strong overwintering colony

**3. Replace Old Queen**
- Source: Colony with new queen (2024)
- Target: Colony with old queen (2021)
- Merge type: Source queen (←)
- Result: Colony with young queen genetics

**4. Consolidate Apiaries**
- Multiple weak colonies in apiary
- Merge several into fewer strong colonies
- Keep best queens via targeted merges
- Result: Fewer, stronger colonies

### 🔗 Related Features

- **[Split Colony](../starter-tier/split_bee_colony.md)**: Opposite operation - create new hive from existing one
- **Collapse Hive**: Mark inactive/dead colony (different from merge)
- **Delete Hive**: Permanently remove hive record
- **Inspections**: Track colony before/after merge

### 📝 Best Practices

**Before Merging:**
- ✅ Check both queens if keeping specific one
- ✅ Assess colony strength and bee populations
- ✅ Consider time of year (best in late summer/fall)
- ✅ Plan physical merge method
- ✅ Have equipment ready (newspaper, spray bottle, etc.)

**During Merge:**
- ✅ Complete digital merge in app first
- ✅ Follow physical merge procedure
- ✅ Use newspaper method for gradual acceptance
- ✅ Minimize disturbance to bees
- ✅ Close hive quickly after combining

**After Merging:**
- ✅ Monitor for 3-7 days for acceptance
- ✅ Check for single queen after merge
- ✅ Watch for fighting or rejection signs
- ✅ Assess food stores (combined colony needs more)
- ✅ Create inspection to document results
- ✅ Delete merged source hive after confirming success (optional)

### 🐛 Troubleshooting

**"No other hives available"**
- Need at least 2 hives in same apiary
- Create another hive or move hive to apiary with others

**"Invalid merge type"**
- Ensure one of three options selected
- Refresh page and try again

**"Source hive not found"**
- Hive may have been deleted
- Check hive ownership

**Boxes not moving as expected:**
- BOTTOM and GATE boxes always stay in source
- This is intended behavior
- Other boxes should move to target

**Can't find merged hive:**
- Merged hives appear grayed out in apiary list
- Use search or filter by status
- Check target hive's "Merged from" section for link

### 📚 Technical Resources

**Implementation Files:**
- Backend: `swarm-api/graph/schema.resolvers.go` (JoinHives mutation)
- Backend: `swarm-api/graph/model/hive.go` (MarkAsMerged, GetMergedFromHives)
- Backend: `swarm-api/graph/model/box.go` (MoveBoxesToHive, GetBoxesByTypeForHive)
- Frontend: `web-app/src/page/hiveEdit/JoinColonyModal.tsx`
- Frontend: `web-app/src/page/hiveEdit/JoinColonyModal.module.less`
- Migration: `swarm-api/migrations/20251205130000_add_hive_merge_tracking.sql`


