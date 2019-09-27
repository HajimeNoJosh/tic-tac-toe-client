# VARIABLE=VALUE sh curl-scripts/games/get-games.sh

curl --include --request GET "https://tic-tac-toe-wdi.herokuapp.com/games/" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{

}'

echo
