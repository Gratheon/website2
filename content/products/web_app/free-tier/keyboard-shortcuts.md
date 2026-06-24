---
layout: products
status: complete
title: 🖮 Keyboard shortcuts
---

### 🎯 Purpose
Provides keyboard-first navigation and actions in the Gratheon web app so beekeepers can move through apiaries, hives, frames, devices, warehouse pages, dialogs, and drawing tools without relying only on a mouse or touchscreen.

Keyboard support is also an accessibility feature: it keeps common workflows available to people who use keyboards, switch devices, screen readers, or other assistive technologies.

### 🎭 User Story
- As a beekeeper managing records from a laptop, tablet keyboard, or assistive technology
- I want common screens to respond to discoverable keyboard controls
- So that I can review colony data, switch between records, edit frame annotations, and confirm routine actions faster and with less pointer interaction

### 🚀 Key Benefits
- **Shortcut discovery**: `Shift + ?` opens the AI Advisor keyboard-shortcuts view for the current screen and turns on visible shortcut hints.
- **Global navigation**: number keys jump to major app sections, and `Ctrl + M` toggles the left menu.
- **Faster hive review**: Arrow keys move through apiary lists, hive cards, boxes, and frames without returning to navigation menus.
- **Accessible controls**: Focusable rows, buttons, sortable headers, and dialogs support keyboard and screen-reader workflows.
- **Safer destructive actions**: Delete and Backspace shortcuts open confirmation flows instead of immediately removing records.
- **Consistent dialog handling**: Enter confirms supported dialogs, while Escape closes cancellable prompts, popovers, and the AI Advisor drawer.
- **Typing-aware behavior**: App-level shortcuts are ignored while the user is typing in inputs, text areas, selects, or editable fields.

### ⌨️ Implemented Shortcuts

#### Global shortcuts

| Area | Shortcut | Behavior |
| --- | --- | --- |
| Any non-typing context | `Shift + ?` | Opens the AI Advisor keyboard-shortcuts view for the current page, unless the AI Advisor feature is locked. Also enables visible shortcut hints on controls. |
| Any non-typing context | `Ctrl + M` | Toggles the left navigation menu. |
| Any non-typing context | `1` | Opens Apiaries. |
| Any non-typing context | `2` | Opens Queens, or Queen Detection on the free tier. |
| Any non-typing context | `3` | Opens Insights when available. |
| Any non-typing context | `4` | Opens Warehouse when available. |
| Any non-typing context | `5` | Opens Devices when available. |
| Any non-typing context | `6` | Opens Alert configuration when available. |
| Any non-typing context | `7` | Opens Account. |
| Any non-typing context | `8` | Opens AI Advisor when available. |
| Any non-typing context | `9` | Opens Billing. |
| Any non-typing context | `0` | Opens Account tokens. |
| AI Advisor drawer | `Esc` | Closes the drawer. |
| Shortcut hints | `Esc` or browser window blur | Hides visible shortcut hints. |

#### Apiaries and hive list

| Area | Shortcut | Behavior |
| --- | --- | --- |
| Apiary list table view | Arrow Up / Arrow Down | Selects the previous or next hive; continues to adjacent apiaries at list boundaries. |
| Apiary list card view | Arrow Up / Arrow Down / Arrow Left / Arrow Right | Moves visually between hive cards and preserves the closest column when moving between rows. |
| Apiary list | First arrow key press | Focuses the currently selected hive, or the first available hive when nothing is selected yet. |
| Sortable apiary table headers | Enter or Space | Toggles sorting for the focused column header. |
| Apiary overview | `H` | Returns to the main apiary/hive list. |

#### Hive detail and structure

| Area | Shortcut | Behavior |
| --- | --- | --- |
| Hive detail | `H` | Returns to the main apiary/hive list. |
| Hive detail | `A` | Returns to the current hive's apiary page when an apiary is available. |
| Hive detail | `E` | Opens hive main-info editing when the hive is editable and not collapsed. |
| Hive structure tab | Arrow Up / Arrow Down | Moves between boxes in the current hive. |
| Hive structure tab | Arrow Left / Arrow Right | Moves between frames in the selected box, keeping the current frame side when possible. |
| Hive structure tab | Backspace | Opens the selected box removal confirmation. |
| Hive structure tab | Delete / Del | Opens the selected frame removal confirmation. |

#### Frame side drawing tools

| Area | Shortcut | Behavior |
| --- | --- | --- |
| Frame side canvas | `C` | Switches to the cell brush. |
| Frame side canvas | `F` | Switches to free draw. |
| Frame side canvas | `X` | Switches to the cell eraser. |
| Frame side canvas | `N` | Selects nectar cells. |
| Frame side canvas | `Y` | Selects honey cells. |
| Frame side canvas | `P` | Selects pollen cells. |
| Frame side canvas | `G` | Selects eggs. |
| Frame side canvas | `B` | Selects brood. |
| Frame side canvas | `K` | Selects capped brood. |
| Frame side canvas | `D` | Selects drone brood. |
| Frame side canvas | `U` | Selects empty cells. |
| Frame side canvas | `+` or `=` | Increases brush size preset. |
| Frame side canvas | `-` | Decreases brush size preset. |
| Frame side canvas | `Ctrl + Z` / `⌘ + Z` | Undoes the latest drawing stroke. |

#### Warehouse and devices

| Area | Shortcut | Behavior |
| --- | --- | --- |
| Devices page | Arrow Up / Arrow Down | Selects the previous or next device. |
| Devices page | Delete / Del | Opens the delete confirmation for the selected device. |
| Hive systems warehouse page | Arrow Up / Arrow Down | Selects the previous or next hive system. |
| Hive systems warehouse page | Enter | Opens the selected hive system. |
| Hive systems warehouse page | Delete / Del | Opens archive/deactivation flow for the selected non-default hive system. |
| Warehouse queen delete dialog | Enter | Confirms deletion of the selected warehouse queen. |

#### Dialogs and popovers

| Area | Shortcut | Behavior |
| --- | --- | --- |
| Confirmation dialogs | Enter | Confirms supported delete/archive/remove actions. |
| Confirmation dialogs and modals | Escape | Cancels supported dialogs. |
| Generic confirmation modal | Tab | Traps focus between confirm and cancel buttons. |
| Popup menus | Escape | Closes the open popup. |

### 🔧 Technical Overview
Keyboard support is implemented with context-aware `keydown` handlers in the web app. Global menu shortcuts live in the shared menu component, while list, detail, warehouse, device, dialog, and drawing shortcuts are handled by their owning screens/components.

The handlers intentionally ignore typing targets (`input`, `textarea`, `select`, and editable content), and many view-level shortcuts also ignore modifier-key combinations or open modal targets. Components then update selection state, focus the relevant link or row, scroll selected items into view, route to the next entity using the current apiary/hive/box/frame/device identifiers, or open a confirmation dialog.

Visible hints are rendered by the shared `KeyboardHints` component. Hints can be shown globally after `Shift + ?`, and drawing toolbar buttons also display local hints for brush and cell-type shortcuts.

### ✅ Current Coverage
Implemented coverage includes:

- Global shortcut discovery and section navigation.
- Tab navigation through native buttons, links, form fields, focusable rows, sortable table headers, and dialogs.
- Apiary list and hive card navigation.
- Hive detail navigation, hive edit shortcut, structure navigation, and safe removal shortcuts.
- Frame side drawing/cell annotation shortcuts.
- Device list and hive-system warehouse keyboard flows.
- Confirmation, modal, popup, and AI Advisor drawer Escape/Enter behavior where implemented.

### 🚫 Current Limitations
- `Shift + ?` opens the AI Advisor keyboard-shortcuts drawer/view rather than a standalone modal.
- Shortcut mappings are not user-customizable.
- There is no full command palette yet.
- Keyboard shortcuts are not guaranteed for every page in the application.
- The warehouse queens page documents shortcuts in the AI Advisor, but the current page implementation mainly supports Enter in the delete dialog; list-level arrow/Delete keyboard handling is not implemented there yet.
- Automated full-app keyboard accessibility coverage is not yet documented here as complete.

### 🔗 Related Features
- [📦 Apiary Management](apiary-management.md)
- [📦 Hive Management](hive-management.md)
- [🖼️ Frame side management](frame-side-management.md)

### 💬 Notes
Keyboard shortcuts are intentionally conservative: they avoid form fields, avoid unexpected modifier-key behavior in most view navigation, and route destructive operations through confirmation dialogs to reduce accidental data loss.

---
**Last Updated**: June 24, 2026
