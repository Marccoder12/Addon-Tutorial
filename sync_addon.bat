@echo off
setlocal

REM Start both without opening extra windows
start "" /min cmd /c "%~dp0sync_bp.bat"
start "" /min cmd /c "%~dp0sync_rp.bat"
exit
