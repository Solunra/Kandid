# JSHint Report

### server\routes\comment.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W058 | 23 | 26 | ```    const comment0 = new commentModel;``` | Missing '()' invoking a constructor. |
| W058 | 32 | 23 | ```    var comment = new commentModel;``` | Missing '()' invoking a constructor. |
| W033 | 35 | 60 | ```            res.status(400).send({message: "Invalid User"})``` | Missing semicolon. |### server\routes\follow.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W058 | 13 | 18 | ```  var follow=new followModel;``` | Missing '()' invoking a constructor. |
| W058 | 43 | 23 | ```  const follow0 = new followModel;``` | Missing '()' invoking a constructor. |### server\routes\post.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W058 | 72 | 23 | ```    const post0 = new postModel;``` | Missing '()' invoking a constructor. |
| W033 | 78 | 47 | ```    res.send("[Database has obtained a post]")``` | Missing semicolon. |
| W058 | 82 | 22 | ```    const post = new postModel;``` | Missing '()' invoking a constructor. |
| W033 | 85 | 58 | ```          res.status(400).send({message: "Invalid User"})``` | Missing semicolon. |
| W058 | 94 | 44 | ```                  const notification = new notificationsModel;``` | Missing '()' invoking a constructor. |
| W033 | 99 | 38 | ```                  notification.save()``` | Missing semicolon. |### server\routes\register.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W058 | 28 | 42 | ```                        const user = new userModel;``` | Missing '()' invoking a constructor. |
| W058 | 46 | 23 | ```    const user0 = new userModel;``` | Missing '()' invoking a constructor. |

---

#### Summary

Found 13 failures - 0 errors - 13 warnings