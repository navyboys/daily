# getTodos
curl -v http://localhost:3000/api/todos?user_id=1&date='2016-07-13'

# addTodo
curl -v \
  --header 'Content-Type: application/json' \
  --data '{"user_id":"1","title":"Run 5K"}' \
  http://localhost:3000/api/todos
