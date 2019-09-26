# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://sei-library-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \

echo
