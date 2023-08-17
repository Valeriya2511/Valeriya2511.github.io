**Рекомендации по работе с ветками**

---

1. Выполняем копию удалённой ветки: git clone "nameRemoteBranch";
2. От неё создаём локальную ветку: git checkout -b "nameLocalBranch";
3. Переходим в неё и выполняем работы в ней: git checkout "nameLocalBranch";
4. По завершению работы переключаемся назад: git checkout "nameRemoteBranch";
5. И выполняем merge с созданой от неё локальной веткой: git merge "nameLocalBranch";
   > Можно так же сразу удалить данную локальную ветку: git branch -d "nameLocalBranch";
6. Выполняем обновление удалённой ветки: git push"nameRemoteBranch";
7. И дальнейший pullRequest в общую ветку если это необходимо;

---
