---
sidebar_position: 16
---

# Keyboard Support - Technical Documentation

### 🎯 Overview
Keyboard support enables faster navigation and actions in the web-app with context-specific shortcuts. Available shortcuts adapt to the current screen, and keyboard hints are visible in the UI to help users discover and learn actions quickly.

The current implementation combines global shortcuts, view-specific shortcuts, standard Tab navigation, and component-level hints. `Shift + ?` opens the AI Advisor keyboard-shortcuts view for the current screen and enables shortcut hints, rather than opening a separate standalone modal.

### 🎬 Demo Video

<iframe width="100%" height="400" src="https://www.youtube.com/embed/hDIBErfHVN4" title="Keyboard support in web-app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### ✅ Key Behaviors
- **Global shortcuts**: `Shift + ?` opens shortcut help in AI Advisor, `Ctrl + M` toggles the left menu, and `1-9 / 0` navigate to major app sections.
- **Context-specific shortcuts**: only relevant key combinations are active for the current view or modal.
- **Typing-aware handlers**: app-level shortcuts ignore inputs, text areas, selects, and editable content.
- **Tab-friendly UI**: native buttons, links, form fields, focusable apiary rows, sortable headers, and supported dialogs remain reachable with Tab / Shift+Tab.
- **Visible keyboard hints**: the shared `KeyboardHints` component displays local shortcut badges on supported controls, especially drawing tools.
- **Safe destructive actions**: Delete and Backspace shortcuts open confirmation flows instead of deleting immediately.

### ⌨️ Implemented Shortcut Areas

| Area | Implemented behavior |
| --- | --- |
| Global navigation | `Shift + ?` opens current-view shortcut help in AI Advisor; `Ctrl + M` toggles the menu; `1-9 / 0` jump to Apiaries, Queens/Queen Detection, Insights, Warehouse, Devices, Alerts, Account, AI Advisor, Billing, and Tokens when those sections are available. |
| Apiary list | Arrow keys focus and move between hives in table/card layouts; list boundaries can continue to adjacent apiaries; sortable headers respond to Enter/Space. |
| Hive detail | `H` returns to hive list, `A` returns to the current apiary, and `E` opens hive main-info editing when the hive can be edited. |
| Hive structure | Arrow Up/Down navigate boxes, Arrow Left/Right navigate frames, Backspace opens box removal, and Delete/Del opens frame removal. |
| Frame side canvas | `C`, `F`, `X`, `N`, `Y`, `P`, `G`, `B`, `K`, `D`, `U`, `+`, `=`, `-`, and `Ctrl/⌘ + Z` switch tools/cell types, resize the brush, or undo drawing. |
| Devices | Arrow Up/Down selects devices; Delete/Del opens the selected device delete confirmation. |
| Hive systems warehouse | Arrow Up/Down selects hive systems, Enter opens the selected system, and Delete/Del starts archiving/deactivation for non-default systems. |
| Dialogs and popovers | Enter confirms supported confirmation dialogs, Escape cancels supported dialogs or closes popovers/drawers, and the generic confirmation modal traps Tab between confirm/cancel buttons. |

### 🔧 Technical Overview
Keyboard support is implemented with context-aware `keydown` handlers in the web app. Global shortcuts live in the shared menu component. Page-specific handlers live with apiary list, hive detail/structure, devices, warehouse hive systems, dialogs, and frame drawing components.

Handlers check the active target before acting. They avoid interfering with normal typing and often skip repeated events, modifier combinations, or modal targets. When a shortcut is accepted, the component updates local selection state, focuses the relevant DOM element, scrolls selected items into view, routes with the current entity identifiers, switches drawing tools, or opens a confirmation flow.

### 📋 Current Acceptance Coverage
- `Shift + ?` surfaces current-view shortcut help through AI Advisor and enables visible shortcut hints.
- Global navigation shortcuts and menu toggle work outside typing fields.
- Arrow-key navigation works on apiary/hive, hive-structure, devices, and hive-system lists without interfering with text entry.
- Focus moves to selected apiary/hive elements and keeps them visible where implemented.
- Hive structure shortcuts navigate boxes and frames using the current URL context.
- Drawing shortcuts switch tools, select cell types, resize brushes, and undo strokes.
- Delete and Backspace shortcuts open confirmation flows for selected removable entities.
- Enter/Escape behavior works for supported confirmation dialogs and does not trigger while a mutation is already in progress.
- Sortable apiary headers can be activated with keyboard input.

### 🚫 Current Limitations
- `Shift + ?` is implemented through the AI Advisor drawer/view, not a standalone modal.
- User-customizable shortcut mapping is not implemented.
- A full command palette is not implemented.
- Keyboard shortcuts are not guaranteed for every page in the application.
- The warehouse queens page currently has Enter support in its delete dialog, but list-level arrow/Delete shortcuts are not implemented there despite being shown in some shortcut help text.
- A documented full-app keyboard-only audit is still needed before claiming complete no-mouse coverage everywhere.

### 🔗 Related Features
- [📦 Apiary Management](apiary-management.md)
- [📦 Hive Management](hive-management.md)
- [🖼️ Frame side management](frame-side-management.md)

### 💬 Notes
Keyboard shortcuts are intentionally conservative: they avoid form fields, ignore unsafe modifier-key combinations in most view navigation, and route destructive operations through confirmation dialogs to reduce accidental data loss.

---
**Last Updated**: June 24, 2026
