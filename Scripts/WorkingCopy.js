/*
利用 GitHub Education 解锁 Working Copy

启用此脚本后再 Safari 打开 https://workingcopy.app/education/ 点击「tap here to access all pro features.」中的 here 跳转到 Working Copy，登录自己的 GitHub 账号即可解锁

Surge:
http-response ^https:\/\/education\.github\.com\/api\/user$ requires-body=1,max-size=0,script-path=scripts/WorkingCopy.js

Quantumult X:
^https:\/\/education\.github\.com\/api\/user$ url script-response-body WorkingCopy.js

MitM = education.github.com

作者 @ImSingee，请勿外传
*/

$done({body: '{"student": true}'})
