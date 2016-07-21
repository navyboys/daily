# getTodos
curl -v http://localhost:3000/api/todos?user_id=1&from=2016-07-11&to=2016-07-17

# addTodo
curl -v \
  --header 'Content-Type: application/json' \
  --data '{"user_id":"1","title":"Run 5K"}' \
  http://localhost:3000/api/todos

# updateTodo
curl -X "PUT" \
  --header 'Content-Type: application/json' \
  --data '{"status":"completed","due":"2016-07-14}' \
  http://localhost:3000/api/todos/6

# deleteTodo
curl -X "DELETE" http://localhost:3000/api/todos/3

# getUserByGithubID
curl -v http://localhost:3000/api/users/111111

# addUser
curl -v \
  --header 'Content-Type: application/json' \
  --data '{"github_id":"222222","github_access_token":"5ab8787034d275fa66e6f1a45bb7dc33850d34bb","email":"navy@daily.io","github_username":"navy","github_profile_url":"https://github.com/navy"}' \
  http://localhost:3000/api/users

# get Github issues
curl -v https://api.github.com/issues?access_token=c5269c80830119655d24b2f8962274212abe9b57

# get Github repo issue
curl -v https://api.github.com/repos/navyboys/daily/issues

# update Github issues
curl -i -X "PATCH" \
  --data '{"state":"open","title":"Title changed by daily"}' \
  https://api.github.com/repos/navyboys/daily/issues/24?access_token=c5269c80830119655d24b2f8962274212abe9b57
