## Windows Settings app

### System
Notifications & actions
* Disable: all notifications
* Disable: Show me the Windows welcome experience...
* Disable: Suggest ways I can finish setting up...
* Disable: Get tips, tricks, and suggestions...

Power & sleep
* Screen off after 1 hour
* Sleep never

Storage
* Storage Sense: enabled
  * Run every day, clean Recycle Bin and Downloads after 30 days

Multitasking
* Disable: When I snap a window, show what I can snap next to it

### Devices
Mouse
* Additional mouse settings > Pointer Options
  * Disable: Enhance pointer precision

### Apps
Startup
* Disable: probably most things

### Easy of Access
Display
* Disable: Show animations in Windows
* Disable: Show transparency in Windows
* Disable: Automatically hide scroll bars in Windows

Keyboard
* Disable: Allow the shortcut key to start Sticky Keys
* Disable: Allow the shortcut key to start Toggle Keys
* Disable: Allow the shortcut key to start Filter Keys

### Search
Permissions & History
* Disable: Search history on this device

## Other

### Disable security questions (will also enable password hint)
gpedit.msc
* Computer Configuration\Administrative Templates\Windows Components\Credential User Interface
  * "Prevent the use of security questions for local accounts"

### Disable some visual distractions
SystemPropertiesPerformance.exe
* Visual Effects > Custom
  * Disable: most checkboxes saying "Animate" or "Fade" or "Shadow"

*When applicable, it'd be nice to migrate these to registry scripts.*
