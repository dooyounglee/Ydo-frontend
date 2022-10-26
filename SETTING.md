# eslint 적용
1. ctrl + P
2. `>settings` 입력 (`setting` 아님)
3. Preferences: Open User Settings (JSON) 선택
4. settings.json 파일이 열리는데
5. 다음소스 추가
```
...
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```