
PROJECT_NAME=$(cat ./package.json | jq -r .name)
PROJECT_NAME="$(tr [A-Z] [a-z] <<< "$PROJECT_NAME")" # to lowercase
REPOSITORY=gcr.io/dorongrinstein-bw

gcloud config set run/region us-central1

gcloud builds submit \
  --tag $REPOSITORY/$PROJECT_NAME

gcloud beta run deploy \
  --image $REPOSITORY/$PROJECT_NAME 
  

