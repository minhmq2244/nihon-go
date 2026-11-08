@echo off
title Nihon-App Stopper
cd /d "%~dp0"

echo ========================================================
echo                  DUNG NIHON-APP
echo ========================================================
echo.

echo Dang tim va tat tien trinh tren cong 5173...

for /f "tokens=5" %%a in ('netstat -ano ^| findstr /c:":5173 " ^| findstr "LISTENING"') do (
    echo Dang tat PID: %%a...
    taskkill /F /T /PID %%a >nul 2>&1
)

taskkill /F /T /FI "WINDOWTITLE eq Nihon-App Dev Server*" >nul 2>&1

powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 5173 -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }" >nul 2>&1

echo.
echo [THANH CONG] Da dung server va giai phong cong 5173.
echo Cua so se tu dong dong sau 3 giay...
ping 127.0.0.1 -n 4 >nul
