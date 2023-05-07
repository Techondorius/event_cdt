service = gin-gonic

start:
	docker compose up -d --build

run:
	docker compose exec gin-gonic go run .

tidy:
	docker compose run $(service) go mod tidy

lintcheck:
	pipenv run mypy --strict --allow-subclassing-any api/
	pipenv run flake8 api/
