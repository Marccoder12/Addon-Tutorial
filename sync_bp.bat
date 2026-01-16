@echo off
set SOURCE=C:\Users\Solace Walter\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\development_behavior_packs\bp
set TARGET=C:\Users\Solace Walter\Documents\Addon Tutorial\BP

:loop
robocopy "%SOURCE%" "%TARGET%" /MIR /FFT /Z /XA:H /W:1 /R:1 /NFL /NDL /NP >nul
timeout /t 2 >nul
goto loop
