# getTodos
curl -v http://localhost:3000/api/todos?user_id=1&date='2016-07-15'

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
