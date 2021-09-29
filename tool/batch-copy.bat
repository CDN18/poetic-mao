REM @echo off
@echo off
set str=A1.md
for /f %%i in (filename-a.txt) do (echo F|(xcopy %str% %%i))