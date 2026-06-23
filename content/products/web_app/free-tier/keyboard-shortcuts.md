---
layout: products
status: complete
title: 🖮 Keyboard shortcuts
---

### 🎯 Purpose
Provides keyboard-first navigation and actions in the Gratheon web app so beekeepers can move through apiaries, hives, frames, devices, and confirmation dialogs without relying only on a mouse or touchscreen.

### 🎭 User Story
- As a beekeeper managing records from a laptop, tablet keyboard, or assistive technology
- I want common screens to respond to familiar keyboard controls
- So that I can review colony data, switch between records, and confirm routine actions faster and with less pointer interaction

### 🚀 Key Benefits
- **Faster hive review**: Arrow keys move through apiary lists, hive cards, boxes, and frames without returning to navigation menus.
- **Accessible controls**: Focusable rows, buttons, sortable headers, and dialogs support keyboard and screen-reader workflows.
- **Safer destructive actions**: Delete and Backspace shortcuts open confirmation flows instead of immediately removing records.
- **Consistent dialog handling**: Enter confirms supported dialogs, while Escape closes cancellable prompts and popovers.
- **Typing-aware behavior**: Global shortcuts are ignored while the user is typing in inputs, text areas, selects, or editable fields.

### ⌨️ Supported Shortcuts

| Area | Shortcut | Behavior |
| --- | --- | --- |
| Apiary list | Arrow Up / Arrow Down | Selects the previous or next hive in table view; continues to adjacent apiaries at list boundaries. |
| Apiary list card view | Arrow Up / Arrow Down / Arrow Left / Arrow Right | Moves visually between hive cards and preserves the closest column when moving between rows. |
| Apiary list | First arrow key press | Focuses the currently selected hive, or the first available hive when nothing is selected yet. |
| Sortable apiary table headers | Enter or Space | Toggles sorting for the focused column header. |
| Hive detail | H | Returns to the main apiary/hive list. |
| Hive detail | A | Returns to the current hive's apiary page when an apiary is available. |
| Hive structure | Arrow Up / Arrow Down | Moves between boxes in the current hive. |
| Hive structure | Arrow Left / Arrow Right | Moves between frames in the selected box, keeping the current frame side when possible. |
| Hive structure | Backspace | Opens the selected box removal confirmation. |
| Hive structure | Delete / Del | Opens the selected frame removal confirmation. |
| Devices page | Arrow Up / Arrow Down | Selects the previous or next device. |
| Devices page | Delete / Del | Opens the delete confirmation for the selected device. |
| Confirmation dialogs | Enter | Confirms supported delete/archive/remove actions. |
| Confirmation dialogs and popovers | Escape | Cancels supported dialogs or closes open popovers. |

### 🔧 Technical Overview
Keyboard support is implemented with context-aware `keydown` handlers in the web app. List and detail pages listen for navigation keys at the document level only when the active element is not a typing target. Components then update selection state, focus the relevant link or row, scroll selected items into view, or route to the next entity using the current apiary, hive, box, frame, or device identifiers.

The feature is currently implemented across the apiary list, hive detail/structure view, device list, and common confirmation flows. Standard browser Tab navigation remains available through native buttons, links, form fields, and explicitly focusable controls.

### 📋 Acceptance Criteria
- Arrow-key navigation works on apiary and hive lists without interfering with text entry.
- Focus moves to the selected hive element and keeps it visible in the viewport.
- Hive structure shortcuts navigate boxes and frames using the current URL context.
- Delete and Backspace shortcuts open confirmation flows for selected removable entities.
- Enter/Escape behavior works for supported confirmation dialogs and does not trigger while a mutation is already in progress.
- Sortable headers can be activated with keyboard input.

### 🚫 Out of Scope
- User-customizable shortcut mapping.
- A global command palette or shortcut overlay.
- Multi-key chords such as Ctrl/⌘ combinations.
- Guaranteed keyboard shortcuts for every page in the application.

### 🔗 Related Features
- [📦 Apiary Management](apiary-management.md)
- [📦 Hive Management](hive-management.md)
- [🖼️ Frame side management](frame-side-management.md)

### 💬 Notes
Keyboard shortcuts are intentionally conservative: they avoid form fields, ignore modifier-key combinations in hive detail navigation, and route destructive operations through confirmation dialogs to reduce accidental data loss.

---
**Last Updated**: June 23, 2026
