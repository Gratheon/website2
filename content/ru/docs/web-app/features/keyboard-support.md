---
sidebar_position: 16
---

# Поддержка клавиатуры — техническая документация

### 🎯 Обзор
Поддержка клавиатуры ускоряет навигацию и действия в web-app с помощью контекстных сочетаний клавиш. Доступные сочетания адаптируются к текущему экрану, а подсказки в интерфейсе помогают пользователям находить и изучать действия быстрее.

Текущая реализация объединяет глобальные сочетания, сочетания для конкретных экранов, стандартную навигацию Tab и подсказки на уровне компонентов. `Shift + ?` открывает в AI Advisor список сочетаний для текущего экрана и включает визуальные подсказки, а не отдельное standalone-модальное окно.

### 🎬 Демо-видео

<iframe width="100%" height="400" src="https://www.youtube.com/embed/hDIBErfHVN4" title="Keyboard support in web-app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### ✅ Ключевые модели поведения
- **Глобальные сочетания**: `Shift + ?` открывает помощь по сочетаниям в AI Advisor, `Ctrl + M` переключает левое меню, а `1-9 / 0` ведут в основные разделы приложения.
- **Контекстные сочетания**: активны только комбинации, релевантные текущему экрану или модальному окну.
- **Без конфликта с вводом**: app-level shortcuts игнорируют `input`, `textarea`, `select` и редактируемый контент.
- **Навигация Tab**: нативные кнопки, ссылки, поля форм, фокусируемые строки пасек, сортируемые заголовки и поддерживаемые диалоги доступны через Tab / Shift+Tab.
- **Видимые подсказки**: общий компонент `KeyboardHints` показывает бейджи сочетаний на поддерживаемых контролах, особенно в инструментах рисования.
- **Безопасные destructive actions**: Delete и Backspace открывают подтверждение вместо немедленного удаления.

### ⌨️ Реализованные области сочетаний

| Область | Реализованное поведение |
| --- | --- |
| Глобальная навигация | `Shift + ?` открывает помощь по текущему экрану в AI Advisor; `Ctrl + M` переключает меню; `1-9 / 0` переходят в Apiaries, Queens/Queen Detection, Insights, Warehouse, Devices, Alerts, Account, AI Advisor, Billing и Tokens, если раздел доступен. |
| Список пасек | Стрелки фокусируют и перемещают выбор между ульями в table/card layout; на границах списка возможен переход к соседним пасекам; сортируемые заголовки реагируют на Enter/Space. |
| Детали улья | `H` возвращает к списку ульев, `A` возвращает к текущей пасеке, `E` открывает редактирование основной информации улья, если улей доступен для редактирования. |
| Структура улья | Arrow Up/Down переключают секции/корпуса, Arrow Left/Right переключают рамки, Backspace открывает удаление секции, Delete/Del открывает удаление рамки. |
| Canvas стороны рамки | `C`, `F`, `X`, `N`, `Y`, `P`, `G`, `B`, `K`, `D`, `U`, `+`, `=`, `-` и `Ctrl/⌘ + Z` переключают инструменты/типы ячеек, размер кисти или отменяют последний штрих. |
| Devices | Arrow Up/Down выбирают устройство; Delete/Del открывает подтверждение удаления выбранного устройства. |
| Warehouse hive systems | Arrow Up/Down выбирают hive system, Enter открывает выбранную систему, Delete/Del запускает архивирование/деактивацию для non-default system. |
| Диалоги и popovers | Enter подтверждает поддерживаемые действия, Escape отменяет поддерживаемые диалоги или закрывает popover/drawer, generic confirmation modal удерживает Tab между Confirm/Cancel. |

### 🔧 Технический обзор
Поддержка клавиатуры реализована через контекстные `keydown` handlers в web app. Глобальные сочетания находятся в общем компоненте меню. Page-specific handlers находятся рядом со списком пасек, деталями/структурой улья, devices, warehouse hive systems, диалогами и компонентами рисования на рамках.

Handlers проверяют активный target перед действием: они не мешают обычному вводу текста и часто пропускают повторные события, modifier-комбинации или modal targets. Когда shortcut принят, компонент обновляет локальный selection state, фокусирует нужный DOM-элемент, прокручивает выбранный элемент в видимую область, выполняет routing по текущим entity identifiers, переключает drawing tools или открывает confirmation flow.

### 📋 Текущий acceptance coverage
- `Shift + ?` показывает помощь по текущему экрану через AI Advisor и включает визуальные подсказки.
- Глобальные navigation shortcuts и menu toggle работают вне полей ввода.
- Arrow-key navigation работает в apiary/hive, hive-structure, devices и hive-system lists без конфликта с вводом текста.
- Фокус перемещается к выбранным apiary/hive элементам и удерживает их видимыми там, где это реализовано.
- Hive structure shortcuts переключают boxes и frames на основе текущего URL context.
- Drawing shortcuts переключают инструменты, cell types, размер кисти и отменяют strokes.
- Delete и Backspace открывают confirmation flows для выбранных removable entities.
- Enter/Escape работают в поддерживаемых confirmation dialogs и не запускаются во время активной mutation.
- Сортируемые apiary headers активируются с клавиатуры.

### 🚫 Текущие ограничения
- `Shift + ?` реализован через AI Advisor drawer/view, а не через отдельное модальное окно.
- User-customizable shortcut mapping не реализован.
- Full command palette не реализована.
- Сочетания клавиш не гарантированы для каждой страницы приложения.
- Warehouse queens page сейчас поддерживает Enter в delete dialog, но list-level Arrow/Delete shortcuts там не реализованы, хотя часть help text их показывает.
- Перед утверждением complete no-mouse coverage everywhere нужен отдельный задокументированный full-app keyboard-only audit.

### 🔗 Связанные функции
- [📦 Управление пасеками](apiary-management.md)
- [📦 Управление ульями](hive-management.md)
- [🖼️ Управление стороной рамки](frame-side-management.md)

### 💬 Примечания
Keyboard shortcuts намеренно консервативны: они не срабатывают в полях ввода, избегают небезопасных modifier-key combinations в большинстве экранов и проводят destructive operations через confirmation dialogs, чтобы снизить риск случайной потери данных.

---
**Last Updated**: June 24, 2026
