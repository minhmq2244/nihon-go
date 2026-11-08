@echo off
title Nihon-App Dev Server
cd /d "%~dp0"

echo ========================================================
echo                 KHOI DONG NIHON-APP
echo ========================================================
echo.

REM Kiem tra Node.js
where node >nul 2>nul
if %errorlevel% neq 0 goto no_node

REM Kiem tra dependencies
if not exist "node_modules\" goto install_deps
goto run_server

:no_node
echo [LOI] Khong tim thay Node.js tren may tinh!
echo Vui long cai dat Node.js tai: https://nodejs.org/
echo.
pause
exit /b 1

:install_deps
echo [THONG BAO] Thu muc node_modules chua ton tai.
echo Dang tu dong cai dat thu vien...
call npm install
if %errorlevel% neq 0 goto install_failed
goto run_server

:install_failed
echo [LOI] Cai dat dependencies that bai!
pause
exit /b 1

:run_server
echo Dang chuan bi mo trinh duyet tai http://localhost:5173 ...
start "" /b cmd /c "ping 127.0.0.1 -n 4 >nul & start http://localhost:5173"

echo.
echo Dang chay dev server: npm run dev
echo Nhan Ctrl + C hoac chay stop.bat de dung server.
echo ========================================================
echo.
call npm run dev

pause
