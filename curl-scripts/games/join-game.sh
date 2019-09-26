# VARIABLE=VALUE sh curl-scripts/games/get-game.sh

curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{

  }'

echo
